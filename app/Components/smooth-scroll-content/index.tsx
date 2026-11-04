"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScroll: React.FC = () => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      smooth: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 1,
      smoothTouch: 0.2,
    });

    return () => smoother.kill();
  });

  return null;
};

export default SmoothScroll;
