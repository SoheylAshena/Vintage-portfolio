"use client";

import VideoAlphaMask from "@/Components/alpha-video-mask";

interface RevealProps {
  children: React.ReactNode;
  videoSrc?: string;
  color?: string;
  inverted?: boolean;
  playbackRate?: number;
  rotate?: number;
}

export default function Reveal({
  children,
  videoSrc = "/videos/7.webm",
  color = "#ffe3ca",
  inverted = false,
  playbackRate = 4,
  rotate = 0,
}: RevealProps) {
  return (
    <VideoAlphaMask
      color={color}
      videoSrc={videoSrc}
      inverted={inverted}
      playbackRate={playbackRate}
      rotate={rotate}
    >
      {children}
    </VideoAlphaMask>
  );
}
