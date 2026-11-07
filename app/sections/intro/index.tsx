import BrushIntro from "@/Components/brush-intro";
import Leaf from "@/Assets/vectors/leaf.svg?react";
import Link from "next/link";

export default function Intro() {
  return (
    <section id="intro" className="hero-layout min-h-screen">
      <div className="min-w-0">
        <p className="eyebrow">لومس / استودیو طراحی و توسعه وب</p>
        <h1 className="my-6 text-7xl max-[700px]:text-5xl">
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
          <Link className="button" href="/contact">
            از پروژه‌تان بگویید
          </Link>
          <Link className="text-link" href="/projects">
            تماشای نمونه‌کارها
          </Link>
        </div>
        <p className="mt-8 text-base text-secondary">
          طراحی سایت، توسعه وب و بازطراحی؛ از شناخت کسب‌وکار تا راه‌اندازی.
        </p>
      </div>
      <div
        className="relative flex flex-col items-center border-r border-rule p-6 max-[700px]:border-t max-[700px]:border-r-0"
        aria-hidden="true"
      >
        <span className="font-script text-9xl max-[700px]:text-7xl">Lomes</span>
        <div className="hero-illustration w-full max-w-75 max-[700px]:max-w-45">
          <BrushIntro Shape={Leaf} duration={3} />
        </div>
        <span className="mt-6 text-base">طراحی با هویت · توسعه با دقت</span>
      </div>
    </section>
  );
}
