"use client";

import Reveal from "@/Components/reveal";

import Frame from "@/Assets/vectors/project-frame.svg?react";
const vido = "/videos/3.1.webm";

import styles from "./project.module.css";

interface ProjectProps {
  name: string;
  title: string;
  desc: string;
  right?: boolean;
  rotate?: number;
}

const Project: React.FC<ProjectProps> = ({
  name,
  title,
  desc,
  right,
  rotate,
}) => {
  return (
    <Reveal videoSrc={vido} color="#ffe3ca" inverted={true} rotate={rotate}>
      <div className={`${styles.project} ${right ? styles.reverse : ""}`}>
        <div className={styles.projFrame}>
          <Frame />
          <p dir="ltr">{name}</p>
        </div>
        <div>
          <h3 className={styles.projTitle}>{title}</h3>
          <p className={styles.projDesc}>{desc}</p>
          <span className={styles.visit}>
            مشاهده وب‌سایت <span aria-hidden="true">↖</span>
          </span>
        </div>
      </div>
    </Reveal>
  );
};

export default Project;
