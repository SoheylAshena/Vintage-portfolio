"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollSmoother);

const SmoothScroll: React.FC = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 1,
      smoothTouch: 0.2,
    });
  });

  return null;
};

export default SmoothScroll;
