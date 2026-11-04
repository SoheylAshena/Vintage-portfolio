"use client";

import Services from "@/sections/services";
import Main from "@/sections/intro";
import { HomePerspective, HomeInvitation } from "@/sections/home-story";
import Divider from "@/Components/Divider";

import TheEnd from "@/Components/the-end";

import gsap from "gsap";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

function App() {
  return (
    <main className="home-shell">
      <Main />
      <Divider />
      <HomePerspective />
      <Services />
      <Divider />
      <HomeInvitation />
      <TheEnd />
    </main>
  );
}

export default App;
