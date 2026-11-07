import Project from "@/Components/Project";
import projects from "./projects-data";
import Link from "next/link";

export default function Projects({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="projects">
      <header className="section-header">
        <p className="eyebrow">
          {standalone
            ? "دفتر پروژه‌ها / نمونه‌کارهای لومس"
            : "از حرف تا عمل / گزیده کارها"}
        </p>
        <Heading className="section-heading">
          {standalone
            ? "هر کسب‌وکار، زبان خودش را دارد."
            : "دو کسب‌وکار، دو دنیای متفاوت."}
        </Heading>
        <p className="body-copy">
          {standalone
            ? "از تجهیزات صنعتی تا ملزومات پزشکی، موضوع هر سایت روی نوع اطلاعات و شیوه معرفی آن اثر می‌گذارد. اینجا می‌توانید با زمینه هر پروژه آشنا شوید و نسخه زنده آن را ببینید."
            : "یک وب‌سایت برای مخاطب صنعتی و دیگری برای حوزه سلامت. نگاهی به کارها بیندازید و تجربه هر کدام را از نزدیک ببینید."}
        </p>
      </header>
      {projects.map((project, index) => (
        <article key={project.name}>
          <a className="block" href={project.live}>
            <Project
              title={project.title}
              name={project.name}
              logo={project.logo as "arnsanat" | "jarahtajhiz"}
              desc={standalone ? project.desc : project.summary}
              right={index % 2 !== 0}
            />
          </a>
          {standalone && (
            <div className="max-w-190 pb-8">
              <p className="eyebrow">زمینه پروژه</p>
              <p className="body-copy mt-3">{project.context}</p>
            </div>
          )}
        </article>
      ))}
      {standalone ? (
        <div className="split-layout section-outro">
          <h2 className="section-heading">
            پروژه بعدی می‌تواند دنیای شما باشد.
          </h2>
          <p className="body-copy">
            لازم نیست کسب‌وکار شما شبیه این نمونه‌ها باشد. درباره مخاطبان و
            نیازهایتان بگویید تا از مسئله خود شما شروع کنیم.
          </p>
          <Link className="text-link" href="/contact">
            پروژه‌تان را معرفی کنید
          </Link>
        </div>
      ) : (
        <Link className="text-link" href="/projects">
          آشنایی بیشتر با پروژه‌ها
        </Link>
      )}
    </section>
  );
}
