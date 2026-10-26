import Section from "@/Components/Section";

const services = [
  {
    label: "برای یک شروع تازه",
    title: "اولین خانه برند شما",
    text: "وقتی کسب‌وکارتان آماده معرفی است، به جایی نیاز دارید که روشن بگوید چه می‌کنید و چه چیزی شما را متمایز می‌کند. از ساختار محتوا تا طراحی و توسعه، این معرفی را شکل می‌دهیم.",
    detail: "وب‌سایت معرفی برند و خدمات",
  },
  {
    label: "برای یک تجربه بهتر",
    title: "سایتی که همراه مخاطب است",
    text: "پیدا کردن یک محصول، شناختن یک خدمت یا فرستادن درخواست نباید دشوار باشد. مسیرها و رابط کاربری را طوری طراحی می‌کنیم که هر صفحه، مخاطب را به قدم بعدی برساند.",
    detail: "طراحی رابط و تجربه کاربری · توسعه وب",
  },
  {
    label: "برای فصلی تازه",
    title: "تغییری فراتر از ظاهر",
    text: "کسب‌وکارتان رشد کرده اما سایت جا مانده است؟ از بخش‌های مبهم و مسیرهای دشوار شروع می‌کنیم و مشخص می‌کنیم کجا به بازطراحی، محتوای تازه یا توسعه نیاز دارید.",
    detail: "بررسی وب‌سایت فعلی · بازطراحی و بهبود",
  },
];

export default function Services() {
  return (
    <Section id="services" className="services">
      <header className="section-heading">
        <p className="eyebrow">لومس چه کمکی می‌کند؟</p>
        <h2>شما کجای مسیر هستید؟</h2>
        <p className="body-copy">
          هر پروژه از یک نیاز متفاوت شروع می‌شود. به جای یک نسخه آماده، راه‌حل
          را متناسب با مرحله‌ای که در آن هستید طراحی می‌کنیم.
        </p>
      </header>
      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title}>
            <p className="eyebrow">{service.label}</p>
            <h3>{service.title}</h3>
            <p className="body-copy">{service.text}</p>
            <p className="service-detail">{service.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
