import Section from "@/components/section";
import styles from "./intro.module.css";
import BrushIntro from "@/components/brush-intro";
import Leaf from "@/assets/vectors/leaf.svg?react";
import Link from "next/link";

export default function Intro({ loading }: { loading: boolean }) {
  return (
    <Section id="intro" className={styles.intro}>
      <div className={styles.textContainer}>
        <p className="eyebrow">لومس / استودیو طراحی و توسعه وب</p>
        <h1 className={styles.title}>
          شبیه خودتان باشید،
          <br />
          <span>در دنیای وب.</span>
        </h1>
        <p className={styles.description}>
          کسب‌وکار شما شخصیت خودش را دارد. وب‌سایتتان هم باید داشته باشد. در
          لومس، آن شخصیت را به تجربه‌ای تبدیل می‌کنیم که دیدنی است، راحت فهمیده
          می‌شود و راه ارتباط با شما را باز می‌کند.
        </p>
        <div className="page-actions">
          <Link className="primary-link" href="/contact">
            از پروژه‌تان بگویید <span aria-hidden="true">↖</span>
          </Link>
          <Link className="text-link" href="/projects">
            تماشای نمونه‌کارها <span aria-hidden="true">↖</span>
          </Link>
        </div>
        <p className={styles.note}>
          طراحی سایت، توسعه وب و بازطراحی؛ از شناخت کسب‌وکار تا راه‌اندازی.
        </p>
      </div>
      <div className={styles.illustration} aria-hidden="true">
        <span className={styles.wordmark}>Lomes</span>
        <div className={styles.leaf}>
          <BrushIntro paused={loading} Shape={Leaf} duration={3} />
        </div>
        <span className={styles.caption}>طراحی با هویت · توسعه با دقت</span>
      </div>
    </Section>
  );
}
