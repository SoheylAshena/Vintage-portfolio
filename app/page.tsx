"use client";

import Services from "@/sections/services";
import Main from "@/sections/intro";
import Projects from "@/sections/projects";
import { HomePerspective, HomeInvitation } from "@/sections/home-story";
import Divider from "@/Components/Divider";
import Reveal from "@/Components/reveal";

import TheEnd from "@/Components/the-end";

import gsap from "gsap";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

function App() {
  return (
    <main className="content">
      <Reveal>
        <Main />
      </Reveal>
      <Reveal>
        <Divider />
      </Reveal>
      <Reveal>
        <HomePerspective />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Divider />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Divider />
      </Reveal>
      <Reveal>
        <HomeInvitation />
      </Reveal>
      <Reveal>
        <TheEnd />
      </Reveal>
    </main>
  );
}

export default App;
