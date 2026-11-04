import Link from "next/link";

const scopes = [
  {
    number: "۰۱",
    title: "وب‌سایت معرفی",
    description:
      "برای کسب‌وکاری که می‌خواهد روشن و حرفه‌ای درباره خودش و خدماتش بگوید.",
    details: [
      "ساختار صفحات و محتوا",
      "طراحی و توسعه وب‌سایت",
      "مسیر تماس روشن",
    ],
  },
  {
    number: "۰۲",
    title: "تجربه چندبخشی",
    description:
      "برای مجموعه‌ای با محصولات یا خدمات متنوع که مخاطب باید راحت‌تر در آن‌ها بگردد.",
    details: [
      "معماری اطلاعات",
      "طراحی مسیرهای مخاطب",
      "توسعه بخش‌های موردنیاز",
    ],
  },
  {
    number: "۰۳",
    title: "بازطراحی و بهبود",
    description:
      "برای وب‌سایتی که دیگر پاسخ‌گوی نیاز کسب‌وکار یا مخاطبانش نیست.",
    details: [
      "بررسی وضعیت فعلی",
      "شناسایی مسیرهای دشوار",
      "طراحی و اجرای تغییرات",
    ],
  },
];

const factors = [
  {
    title: "دامنه پروژه",
    text: "تعداد صفحات و میزان تفاوت آن‌ها در شکل‌گیری ساختار و طراحی اثر دارد.",
  },
  {
    title: "محتوا و اطلاعات",
    text: "آماده‌بودن متن‌ها، تصاویر و اطلاعات محصولات، حجم کار موردنیاز را تغییر می‌دهد.",
  },
  {
    title: "نیازهای ویژه",
    text: "قابلیت‌ها و مسیرهای اختصاصی هر کسب‌وکار در برآورد جداگانه بررسی می‌شوند.",
  },
];

const steps = [
  "درباره کسب‌وکار، مخاطب و هدف سایت شما می‌شنویم.",
  "صفحات، محتوا و نیازهای ویژه پروژه را مشخص می‌کنیم.",
  "شرح کار و برآورد هزینه را برای تصمیم‌گیری شما می‌فرستیم.",
];

export default function PricingPage() {
  return (
    <main>
      <section className="max-w-[850px]" aria-labelledby="pricing-title">
        <p className="eyebrow">هزینه و تعرفه / لومس</p>
        <h1
          id="pricing-title"
          className="my-5 mb-6 max-w-[760px] text-[clamp(2.7rem,5vw,4.5rem)]"
        >
          قیمت هر سایت، از نیاز همان کسب‌وکار شروع می‌شود.
        </h1>
        <p className="body-copy max-w-[680px]">
          دامنه و نیازهای پروژه‌ها با هم فرق دارند؛ برای همین ابتدا مشخص می‌کنیم
          سایت شما چه چیزی لازم دارد، بعد برآورد روشن و متناسب با همان کار ارائه
          می‌کنیم.
        </p>
        <div className="actions">
          <Link className="button-link" href="/contact">
            درخواست برآورد پروژه
          </Link>
          <a className="text-link" href="#scopes">
            دیدن دامنه‌های رایج
          </a>
        </div>
      </section>

      <section id="scopes" aria-labelledby="scopes-title">
        <header className="section-header">
          <p className="eyebrow">هر پروژه، دامنه خودش را دارد</p>
          <h2 id="scopes-title" className="section-heading">
            از کجا شروع می‌کنیم؟
          </h2>
          <p className="body-copy">
            این سه مسیر، نمونه‌هایی از نیازهایی هستند که می‌توانیم درباره‌شان
            گفت‌وگو کنیم. شرح نهایی کار و هزینه بعد از شناخت جزئیات پروژه مشخص
            می‌شود.
          </p>
        </header>
        <div className="border-rule grid grid-cols-3 border-y max-[900px]:grid-cols-1">
          {scopes.map((scope) => (
            <article
              className="[&+article]:border-rule flex min-h-[410px] flex-col px-6 py-7 max-[900px]:min-h-0 max-[900px]:px-0 [&+article]:border-s max-[900px]:[&+article]:border-s-0 max-[900px]:[&+article]:border-t"
              key={scope.number}
            >
              <p className="eyebrow">{scope.number}</p>
              <h3 className="my-3 text-[1.8rem]">{scope.title}</h3>
              <p className="text-secondary">{scope.description}</p>
              <ul className="text-secondary my-5 grid gap-2 ps-5 text-base max-[900px]:mb-6">
                {scope.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p className="border-rule mt-auto border-t pt-[18px] text-base">
                برآورد اختصاصی پس از گفت‌وگو
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="factors-title">
        <div className="mb-8 max-w-[640px]">
          <p className="eyebrow">چطور برآورد می‌کنیم؟</p>
          <h2
            id="factors-title"
            className="mt-3 text-[clamp(2.25rem,4vw,3.25rem)]"
          >
            چه چیزهایی روی هزینه اثر می‌گذارند؟
          </h2>
        </div>
        <div className="border-rule border-t">
          {factors.map((factor, index) => (
            <article
              className="border-rule grid grid-cols-[100px_1fr] gap-6 border-b py-6 max-[700px]:grid-cols-[48px_1fr] max-[700px]:gap-3"
              key={factor.title}
            >
              <span className="eyebrow">۰{index + 1}</span>
              <div>
                <h3 className="mb-2 text-[1.8rem]">{factor.title}</h3>
                <p className="body-copy mb-0 max-w-[680px]">{factor.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="steps-title">
        <header className="section-header">
          <p className="eyebrow">پیش از شروع همکاری</p>
          <h2 id="steps-title" className="section-heading">
            مسیر رسیدن به پیشنهاد روشن
          </h2>
        </header>
        <ol className="grid list-none grid-cols-3 gap-7 max-[700px]:grid-cols-1 max-[700px]:gap-4">
          {steps.map((step, index) => (
            <li
              className="border-rule min-h-[150px] border-t pt-4 max-[700px]:min-h-0"
              key={step}
            >
              <span className="eyebrow">{`۰${index + 1}`}</span>
              <p className="mt-4 max-w-80 max-[700px]:mt-2">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pricing-contact border-rule border-t text-center">
        <p className="eyebrow">قدم اول ساده است</p>
        <h2 className="mt-3 text-[clamp(2.25rem,4vw,3.25rem)]">
          درباره سایت موردنظرتان بگویید.
        </h2>
        <p className="body-copy mx-auto my-4 mb-6 max-w-[620px]">
          معرفی کوتاه کسب‌وکار، هدف سایت و هر جزئیاتی که از حالا می‌دانید، برای
          شروع برآورد کافی است.
        </p>
        <Link className="button-link" href="/contact">
          گفت‌وگو درباره پروژه
        </Link>
      </section>
    </main>
  );
}
