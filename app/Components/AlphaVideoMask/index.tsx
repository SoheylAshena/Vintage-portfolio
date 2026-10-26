"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

interface VideoAlphaMaskProps {
  videoSrc: string;
  width?: number;
  height?: number;
  color: string;
  inverted?: boolean;
  playbackRate?: number;
  children: React.ReactNode;
  rotate?: number;
}

const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_texCoord;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_position * 0.5 + 0.5;
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform sampler2D u_video;
  uniform vec4 u_color;
  uniform float u_inverted;
  varying vec2 v_texCoord;
  void main() {
    vec3 mask = texture2D(u_video, v_texCoord).rgb;
    float luminance = dot(mask, vec3(0.2126, 0.7152, 0.0722));
    float alpha = u_color.a * mix(luminance, 1.0 - luminance, u_inverted);
    // Match the premultiplied canvas compositor, including fully transparent pixels.
    gl_FragColor = vec4(u_color.rgb * alpha, alpha);
  }
`;

const VideoAlphaMask: React.FC<VideoAlphaMaskProps> = ({
  videoSrc,
  width = 680,
  height = 400,
  color,
  inverted = false,
  playbackRate = 1,
  children,
  rotate = 0,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const updateRenderer = useRef<(() => void) | null>(null);
  const settings = useRef({ width, height, color, inverted, playbackRate });
  const [contextVersion, setContextVersion] = useState(0);

  // Uniforms and output size can change without rebuilding the WebGL pipeline.
  useLayoutEffect(() => {
    settings.current = { width, height, color, inverted, playbackRate };
    updateRenderer.current?.();
  }, [width, height, color, inverted, playbackRate]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false,
    });
    if (!gl) return;

    let disposed = false;
    let started = false;
    let failed = false;
    let frameId: number | null = null;
    let rafId: number | null = null;
    let lastTime = -1;
    let hasFrame = false;
    const shaders: WebGLShader[] = [];
    const program = gl.createProgram();
    const buffer = gl.createBuffer();
    const texture = gl.createTexture();
    const releaseResources = () => {
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      shaders.forEach((shader) => gl.deleteShader(shader));
    };
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Unable to create video mask shader");
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(
          gl.getShaderInfoLog(shader) || "Video mask shader failed",
        );
      }
      return shader;
    };

    try {
      if (!program || !buffer || !texture) {
        throw new Error("Unable to allocate video mask resources");
      }
      gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShaderSource));
      gl.attachShader(
        program,
        compile(gl.FRAGMENT_SHADER, fragmentShaderSource),
      );
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(
          gl.getProgramInfoLog(program) || "Video mask link failed",
        );
      }
    } catch (error) {
      console.error("VideoAlphaMask:", error);
      releaseResources();
      return;
    }

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    // A full-screen triangle needs only one buffer and avoids a diagonal seam.
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const position = gl.getAttribLocation(program!, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
    gl.disable(gl.BLEND);
    const colorLocation = gl.getUniformLocation(program!, "u_color");
    const invertedLocation = gl.getUniformLocation(program!, "u_inverted");
    gl.uniform1i(gl.getUniformLocation(program!, "u_video"), 0);
    const colorCanvas = document.createElement("canvas");
    colorCanvas.width = colorCanvas.height = 1;
    const colorContext = colorCanvas.getContext("2d", {
      willReadFrequently: true,
    });

    const cancelFrame = () => {
      if (frameId !== null) video.cancelVideoFrameCallback(frameId);
      if (rafId !== null) cancelAnimationFrame(rafId);
      frameId = rafId = null;
    };
    const draw = (force = false) => {
      if (disposed || failed || gl.isContextLost()) return;
      if (
        started &&
        video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA &&
        video.videoWidth > 0
      ) {
        if (force || video.currentTime !== lastTime) {
          try {
            // Keep texImage2D's optimized browser video-upload path.
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              gl.RGBA,
              gl.RGBA,
              gl.UNSIGNED_BYTE,
              video,
            );
            lastTime = video.currentTime;
            hasFrame = true;
          } catch (error) {
            failed = true;
            cancelFrame();
            console.error("VideoAlphaMask: video upload failed", error);
            canvas.style.visibility = "hidden";
            return;
          }
        }
      }
      if (hasFrame) gl.drawArrays(gl.TRIANGLES, 0, 3);
      else gl.clear(gl.COLOR_BUFFER_BIT);
    };
    const scheduleFrame = () => {
      if (
        disposed ||
        failed ||
        gl.isContextLost() ||
        video.paused ||
        video.ended ||
        document.hidden ||
        frameId !== null ||
        rafId !== null
      )
        return;
      if (typeof video.requestVideoFrameCallback === "function") {
        frameId = video.requestVideoFrameCallback(() => {
          frameId = null;
          draw(true);
          scheduleFrame();
        });
      } else {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          if (video.currentTime !== lastTime) draw();
          scheduleFrame();
        });
      }
    };
    const update = () => {
      if (gl.isContextLost()) return;
      const next = settings.current;
      const nextWidth = Math.max(1, Math.round(next.width));
      const nextHeight = Math.max(1, Math.round(next.height));
      if (canvas.width !== nextWidth) canvas.width = nextWidth;
      if (canvas.height !== nextHeight) canvas.height = nextHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      video.playbackRate = next.playbackRate;
      if (colorContext) {
        colorContext.clearRect(0, 0, 1, 1);
        colorContext.fillStyle = next.color;
        colorContext.fillRect(0, 0, 1, 1);
        const [r, g, b, a] = colorContext.getImageData(0, 0, 1, 1).data;
        const alpha = a / 255;
        gl.uniform4f(colorLocation, r / 255, g / 255, b / 255, alpha);
        gl.clearColor(
          (r / 255) * alpha,
          (g / 255) * alpha,
          (b / 255) * alpha,
          alpha,
        );
      }
      gl.uniform1f(invertedLocation, next.inverted ? 1 : 0);
      draw();
    };
    updateRenderer.current = update;
    canvas.style.visibility = "visible";
    update();

    const onPlaying = () => {
      draw(true);
      scheduleFrame();
    };
    const onStopped = () => {
      cancelFrame();
      draw(true);
    };
    const onSeeked = () => draw(true);
    const onVisibility = () => {
      if (document.hidden) cancelFrame();
      else {
        draw(true);
        scheduleFrame();
      }
    };
    const onContextLost = (event: Event) => {
      event.preventDefault();
      cancelFrame();
    };
    const onContextRestored = () => setContextVersion((version) => version + 1);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onStopped);
    video.addEventListener("ended", onStopped);
    video.addEventListener("seeked", onSeeked);
    document.addEventListener("visibilitychange", onVisibility);
    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);

    const scrollContext = gsap.context(() => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          once: true,
          onEnter: () => {
            started = true;
            // Muted inline playback may still be rejected by device power settings.
            void video.play().catch(() => {});
          },
        },
      });
    });

    return () => {
      disposed = true;
      updateRenderer.current = null;
      cancelFrame();
      scrollContext.revert();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onStopped);
      video.removeEventListener("ended", onStopped);
      video.removeEventListener("seeked", onSeeked);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      video.pause();
      releaseResources();
    };
  }, [videoSrc, contextVersion]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {children}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          pointerEvents: "none",
          transform: `rotate(${rotate}deg)`,
        }}
      />
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        aria-hidden="true"
        // Keep a rendered inline video for Safari's video-to-texture path.
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default VideoAlphaMask;
