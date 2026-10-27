"use client";

import AboutDetails from "@/sections/about/details";
import About from "@/sections/about";

export default function AboutPage() {
  return (
    <main className="standalone">
      <About standalone />
      <AboutDetails />
    </main>
  );
}
