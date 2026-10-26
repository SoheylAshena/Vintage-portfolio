import Link from "next/link";
import Section from "@/components/section";

const principles = [
  {
    title: "اول معنا، بعد ظاهر",
    text: "قبل از انتخاب رنگ و چیدمان، باید بدانیم هر صفحه برای چه کسی است و قرار است چه کاری انجام دهد. ظاهر خوب از یک تصمیم روشن شروع می‌شود.",
  },
  {
    title: "شخصیت، در جزئیات",
    text: "هویت یک سایت فقط در لوگو نیست. لحن نوشته‌ها، فاصله‌ها، تصاویر و حتی حرکت یک دکمه، همگی در احساسی که مخاطب می‌گیرد سهم دارند.",
  },
  {
    title: "سادگی، پشت صحنه هم",
    text: "به ساختاری اهمیت می‌دهیم که قابل فهم و قابل نگهداری باشد؛ تا تغییر محتوا یا اضافه کردن یک بخش تازه، با پیچیدگی بی‌دلیل همراه نشود.",
  },
];
const steps = [
  {
    title: "شناخت مسئله",
    text: "مخاطب، هدف سایت و اولویت‌ها را مشخص می‌کنیم. نتیجه این مرحله، تعریف روشن‌تری از محدوده کار است.",
  },
  {
    title: "شکل دادن به ایده",
    text: "ساختار صفحات و مسیر بصری را طراحی می‌کنیم. بازخورد شما کمک می‌کند پیش از توسعه، تصمیم‌های اصلی را بگیریم.",
  },
  {
    title: "ساخت و بررسی",
    text: "طراحی به صفحات واقعی تبدیل می‌شود. نمایش در موبایل، خوانایی محتوا و تعامل‌های اصلی را بررسی می‌کنیم.",
  },
  {
    title: "آماده شدن برای انتشار",
    text: "محتوا و جزئیات نهایی را مرور می‌کنیم و درباره تحویل و نیازهای پس از راه‌اندازی به توافق می‌رسیم.",
  },
];

export default function AboutDetails() {
  return (
    <Section className="editorial-section">
      <header className="section-heading">
        <p className="eyebrow">معیارهای ما</p>
        <h2>چیزهایی که از کنارشان ساده نمی‌گذریم.</h2>
      </header>
      <div className="service-grid">
        {principles.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p className="body-copy">{item.text}</p>
          </article>
        ))}
      </div>
      <div className="process">
        <header className="section-heading">
          <p className="eyebrow">همکاری از نزدیک</p>
          <h2>در هر مرحله، بدانیم کجا ایستاده‌ایم.</h2>
          <p className="body-copy">
            یک همکاری خوب به گفت‌وگوی روشن نیاز دارد: چه چیزی در حال انجام است،
            چه تصمیمی باید گرفته شود و قدم بعدی چیست.
          </p>
        </header>
        <ol className="process-grid">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p className="body-copy">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="editorial-grid closing-note">
        <h2>
          شما کسب‌وکارتان را می‌شناسید.
          <br />
          ما برای شنیدن آمده‌ایم.
        </h2>
        <div>
          <p className="body-copy">
            شناخت شما از مشتری‌ها، تجربه‌های قبلی و حتی چیزهایی که دوست ندارید،
            بخشی از مسیر طراحی است. قرار است به زبانی برسیم که هم برای شما آشنا
            باشد و هم برای مخاطبتان روشن.
          </p>
          <Link className="text-link" href="/contact">
            درباره همکاری با لومس بنویسید <span aria-hidden="true">↖</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
