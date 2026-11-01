"use client";

import Projects from "@/sections/projects";
import Reveal from "@/Components/reveal";

export default function ProjectsPage() {
  return (
    <main className="standalone">
      <Reveal>
        <Projects standalone />
      </Reveal>
    </main>
  );
}
