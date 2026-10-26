"use client";

import Services from "@/sections/services";
import Main from "@/sections/intro";
import Projects from "@/sections/projects";
import { HomePerspective, HomeInvitation } from "@/sections/home-story";
import Divider from "@/components/divider";

import TheEnd from "@/components/the-end";
import Loading from "@/sections/loading";

import useLoading from "@/hooks/useLoading";

import gsap from "gsap";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";

import SmoothScroll from "@/components/smooth-scroll-content";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

function App() {
  const loading = useLoading();

  return (
    <>
      <Loading finished={!loading} />
      <SmoothScroll>
        <main className="content">
          <Main loading={loading} />
          <Divider />
          <HomePerspective />
          <Services />
          <Divider />
          <Projects />
          <Divider />
          <HomeInvitation />
          <TheEnd />
        </main>
      </SmoothScroll>
    </>
  );
}

export default App;
