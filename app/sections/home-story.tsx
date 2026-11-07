import Link from "next/link";

export function HomePerspective() {
  return (
    <section>
      <div className="split-layout">
        <header className="section-header">
          <p className="eyebrow">پیش از اولین کلیک</p>
          <h2 className="section-heading">
            وقتی شما حضور ندارید،
            <br />
            وب‌سایتتان حرف می‌زند.
          </h2>
        </header>
        <div>
          <p className="body-copy">
            کسی وارد سایت شما می‌شود که هنوز شما را نمی‌شناسد. چند سؤال ساده
            دارد: چه کاری انجام می‌دهید؟ چرا باید به شما اعتماد کند؟ و از کجا
            شروع کند؟
          </p>
          <p className="body-copy">
            ما طراحی را از همین سؤال‌ها آغاز می‌کنیم. محتوا، تصویر و مسیرهای
            سایت باید کنار هم قرار بگیرند تا مخاطب، هم شخصیت کسب‌وکار شما را
            بشناسد و هم قدم بعدی را پیدا کند.
          </p>
          <p className="mt-6 font-heading text-2xl">
            یک سایت خوب، گفت‌وگو را شروع می‌کند.
          </p>
        </div>
      </div>
    </section>
  );
}

export function HomeInvitation() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-200 py-6 text-center">
        <p className="eyebrow">فصل بعدی کسب‌وکار شما</p>
        <h2 className="section-heading">
          ایده‌تان هنوز کامل نیست؟
          <br />
          از همان‌جا شروع کنیم.
        </h2>
        <p className="centered-copy">
          شاید فقط بدانید سایت فعلی‌تان دیگر شبیه شما نیست. شاید هم برای یک شروع
          تازه آماده‌اید. لازم نیست همه پاسخ‌ها را داشته باشید؛ کافی است بگویید
          چه چیزی می‌خواهید تغییر کند.
        </p>
        <Link className="button" href="/contact">
          بیایید درباره‌اش حرف بزنیم
        </Link>
        <p className="mt-5 text-base text-secondary">
          چند خط درباره کسب‌وکارتان، نقطه شروع خوبی است.
        </p>
      </div>
    </section>
  );
}
