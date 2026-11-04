import BrushIntro from "@/Components/brush-intro";
import Leaf from "@/Assets/vectors/leaf.svg?react";
import Link from "next/link";

export default function Intro() {
  return (
    <section
      id="intro"
      className="grid min-h-screen w-full grid-cols-[1.25fr_0.75fr] items-center gap-12 max-[700px]:grid-cols-1 max-[700px]:gap-10"
    >
      <div className="min-w-0">
        <p className="eyebrow">لومس / استودیو طراحی و توسعه وب</p>
        <h1 className="my-6 text-[clamp(3.5rem,6vw,5.5rem)] max-[700px]:text-[clamp(3rem,10vw,4rem)]">
          لومس، همراه با برند شما
          <br />
          <span className="text-secondary">متفاوت در طراحی</span>
        </h1>
        <p className="max-w-145 text-xl">
          کسب‌وکار شما شخصیت خودش را دارد. وب‌سایتتان هم باید داشته باشد. در
          لومس، آن شخصیت را به تجربه‌ای تبدیل می‌کنیم که دیدنی است، راحت فهمیده
          می‌شود و راه ارتباط با شما را باز می‌کند.
        </p>
        <div className="actions">
          <Link className="button-link transition-colors" href="/contact">
            از پروژه‌تان بگویید
          </Link>
          <Link className="text-link transition-colors" href="/projects">
            تماشای نمونه‌کارها
          </Link>
        </div>
        <p className="text-secondary mt-8 text-base">
          طراحی سایت، توسعه وب و بازطراحی؛ از شناخت کسب‌وکار تا راه‌اندازی.
        </p>
      </div>
      <div
        className="border-rule relative flex flex-col items-center border-s p-6 max-[700px]:border-s-0 max-[700px]:border-t"
        aria-hidden="true"
      >
        <span className="font-script text-[clamp(5rem,10vw,9rem)]">Lomes</span>
        <div className="hero-illustration stroke-primary w-full max-w-75 stroke-[0.3] [stroke-linecap:round] max-[700px]:max-w-45">
          <BrushIntro Shape={Leaf} duration={3} />
        </div>
        <span className="mt-6 text-[0.95rem]">
          طراحی با هویت · توسعه با دقت
        </span>
      </div>
    </section>
  );
}
