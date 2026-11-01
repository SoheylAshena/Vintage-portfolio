"use client";

import AboutDetails from "@/sections/about/details";
import About from "@/sections/about";
import Reveal from "@/Components/reveal";

export default function AboutPage() {
  return (
    <main className="standalone">
      <Reveal>
        <About standalone />
      </Reveal>
      <Reveal>
        <AboutDetails />
      </Reveal>
    </main>
  );
}
