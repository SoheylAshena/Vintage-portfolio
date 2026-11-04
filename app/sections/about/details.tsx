import Link from "next/link";

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
    <section className="w-full">
      <header className="section-header">
        <p className="eyebrow">معیارهای ما</p>
        <h2 className="section-heading">
          چیزهایی که از کنارشان ساده نمی‌گذریم.
        </h2>
      </header>
      <div className="card-grid">
        {principles.map((item) => (
          <article key={item.title}>
            <h3 className="my-4 text-3xl">{item.title}</h3>
            <p className="body-copy">{item.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-20">
        <header className="section-header">
          <p className="eyebrow">همکاری از نزدیک</p>
          <h2 className="section-heading">
            در هر مرحله، بدانیم کجا ایستاده‌ایم.
          </h2>
          <p className="body-copy">
            یک همکاری خوب به گفت‌وگوی روشن نیاز دارد: چه چیزی در حال انجام است،
            چه تصمیمی باید گرفته شود و قدم بعدی چیست.
          </p>
        </header>
        <ol className="[&>li]:border-rule grid [list-style-position:inside] list-[persian] grid-cols-4 gap-7 max-[700px]:grid-cols-1 [&>li]:border-t [&>li]:pt-5">
          {steps.map((step) => (
            <li key={step.title}>
              <h3 className="my-4 text-3xl">{step.title}</h3>
              <p className="text-secondary mb-5 text-base">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="split-layout border-rule mt-20 border-t pt-12">
        <h2 className="section-heading mb-6">
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
            درباره همکاری با لومس بنویسید
          </Link>
        </div>
      </div>
    </section>
  );
}
