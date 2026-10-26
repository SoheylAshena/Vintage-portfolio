import Link from "next/link";
import Section from "@/Components/Section";

export function HomePerspective() {
  return (
    <Section className="editorial-section">
      <div className="editorial-grid">
        <header className="section-heading">
          <p className="eyebrow">پیش از اولین کلیک</p>
          <h2>
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
          <p className="editorial-note">یک سایت خوب، گفت‌وگو را شروع می‌کند.</p>
        </div>
      </div>
    </Section>
  );
}

export function HomeInvitation() {
  return (
    <Section id="contact" className="editorial-section">
      <div className="invitation">
        <p className="eyebrow">فصل بعدی کسب‌وکار شما</p>
        <h2>
          ایده‌تان هنوز کامل نیست؟
          <br />
          از همان‌جا شروع کنیم.
        </h2>
        <p className="body-copy">
          شاید فقط بدانید سایت فعلی‌تان دیگر شبیه شما نیست. شاید هم برای یک شروع
          تازه آماده‌اید. لازم نیست همه پاسخ‌ها را داشته باشید؛ کافی است بگویید
          چه چیزی می‌خواهید تغییر کند.
        </p>
        <Link className="primary-link" href="/contact">
          بیایید درباره‌اش حرف بزنیم <span aria-hidden="true">↖</span>
        </Link>
        <p className="invitation-note">
          چند خط درباره کسب‌وکارتان، نقطه شروع خوبی است.
        </p>
      </div>
    </Section>
  );
}
