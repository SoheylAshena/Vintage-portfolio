"use client";

import Navbar from "./Layout/Navbar";
import Main from "./Layout/Intro";
import Projects from "./Layout/Projects";
import Contact from "./Layout/Contact";
import Divider from "./Components/Divider";
import About from "./Layout/About";
import TheEnd from "./Components/TheEnd";
import Loading from "./Layout/Loading";

import useLoading from "./Hooks/useLoading";

import gsap from "gsap";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";

import SmoothScroll from "./Components/SmoothScrollContent";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

function App() {
  const loading = useLoading();

  return (
    <>
      <Loading finished={!loading} />
      <Navbar />

      <SmoothScroll>
        <div className="content">
          <Main loading={loading} />
          <Divider />
          <Projects />
          <Divider />
          <About />
          <Divider />
          <Contact />
          <TheEnd />
        </div>
      </SmoothScroll>

      <div className="texture"></div>
    </>
  );
}

export default App;
