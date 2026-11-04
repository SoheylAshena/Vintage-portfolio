import Link from "next/link";
import Frame from "@/Assets/vectors/picture-frame.svg?react";

export default function About({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section
      id="about"
      className="grid w-full grid-cols-[1.3fr_0.7fr] items-center gap-14 max-[700px]:grid-cols-1 max-[700px]:gap-8"
    >
      <div>
        <p className="eyebrow">درباره لومس / نگاه ما</p>
        <Heading className="section-heading my-5">
          سلیقه در طراحی،
          <br />
          فکر در هر تصمیم.
        </Heading>
        <p className="body-copy">
          لومس استودیو طراحی و توسعه وب است؛ جایی برای کنار هم نشاندن هویت بصری
          و کاربرد. برای ما، طراحی از انتخاب یک سبک شروع نمی‌شود؛ از فهمیدن
          کسب‌وکار و آدم‌هایی شروع می‌شود که قرار است از سایت استفاده کنند.
        </p>
        <p className="body-copy">
          ظاهر این وب‌سایت، برداشت ما از یک فضای گرم و اصیل است. پروژه شما
          می‌تواند زبان دیگری داشته باشد: آرام، جسور، رسمی یا مینیمال. چیزی که
          ثابت می‌ماند، توجه به تناسب طراحی با شخصیت شماست.
        </p>
        <Link className="text-link" href="/contact">
          با هم از ایده شما شروع کنیم
        </Link>
      </div>
      <div
        className="relative flex aspect-square flex-col items-center justify-center text-center max-[700px]:mx-auto max-[700px]:w-full max-[700px]:max-w-80"
        aria-hidden="true"
      >
        <Frame className="absolute inset-0 h-full w-full" />
        <span className="font-script text-8xl">Lomes</span>
        <p className="mt-4 text-base">
          با اصالت در طراحی
          <br />
          با دقت در ساخت
        </p>
      </div>
    </section>
  );
}
