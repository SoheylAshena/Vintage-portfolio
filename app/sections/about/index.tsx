import Link from "next/link";
import Section from "@/components/section";
import styles from "./about.module.css";
import Frame from "@/assets/vectors/picture-frame.svg?react";
import VideoAlphaMask from "@/components/alpha-video-mask";

export default function About({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <VideoAlphaMask color="#ffe3ca" videoSrc="/videos/7.webm" playbackRate={2}>
      <Section id="about" className={styles.about}>
        <div>
          <p className="eyebrow">درباره لومس / نگاه ما</p>
          <Heading className={styles.title}>
            سلیقه در طراحی،
            <br />
            فکر در هر تصمیم.
          </Heading>
          <p className="body-copy">
            لومس استودیو طراحی و توسعه وب است؛ جایی برای کنار هم نشاندن هویت
            بصری و کاربرد. برای ما، طراحی از انتخاب یک سبک شروع نمی‌شود؛ از
            فهمیدن کسب‌وکار و آدم‌هایی شروع می‌شود که قرار است از سایت استفاده
            کنند.
          </p>
          <p className="body-copy">
            ظاهر این وب‌سایت، برداشت ما از یک فضای گرم و اصیل است. پروژه شما
            می‌تواند زبان دیگری داشته باشد: آرام، جسور، رسمی یا مینیمال. چیزی که
            ثابت می‌ماند، توجه به تناسب طراحی با شخصیت شماست.
          </p>
          <Link className="text-link" href="/contact">
            با هم از ایده شما شروع کنیم <span aria-hidden="true">↖</span>
          </Link>
        </div>
        <div className={styles.seal} aria-hidden="true">
          <Frame />
          <span>Lomes</span>
          <p>
            با اصالت در طراحی
            <br />
            با دقت در ساخت
          </p>
        </div>
      </Section>
    </VideoAlphaMask>
  );
}
