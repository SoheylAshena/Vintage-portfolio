import Section from "@/Components/Section";
import Image from "next/image";
import styles from "./about.module.css";

import Pico from "@/Assets/vectors/PicFrame.svg?react";
import VideoAlphaMask from "@/Components/AlphaVideoMask";
const vido = "/videos/7.webm";
const picture = "/images/Vintage.png";

const About = () => {
  return (
    <VideoAlphaMask color="#ffe3ca" videoSrc={vido} playbackRate={2}>
      <Section id="About" className={styles.about}>
        <div className={styles.introduction}>
          <p className={styles.name}>I am Soheyl Ashena.</p>
          <p className={styles.desc}>
            I&apos;m passionate about creating beautiful and user-friendly web
            experiences. As a front-end developer, I enjoy turning ideas into
            interactive websites and applications. My journey started with Html,
            Css, and JavaScript, I continue learning and improving myself
            everyday to become a professional developer.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.me}
            src={picture}
            width={320}
            height={320}
            alt="Picture of me"
          />
          <Pico />
        </div>
      </Section>
    </VideoAlphaMask>
  );
};

export default About;
