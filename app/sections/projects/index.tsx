import Link from "next/link";
import Section from "@/Components/Section";
import Project from "@/Components/Project";
import projects from "./projects-data";

export default function Projects({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <Section id="projects" className="projects">
      <header className="section-heading">
        <p className="eyebrow">
          {standalone
            ? "دفتر پروژه‌ها / نمونه‌کارهای لومس"
            : "از حرف تا عمل / گزیده کارها"}
        </p>
        <Heading>
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
          <a className="project-link" href={project.live}>
            <Project
              title={project.title}
              name={project.name}
              desc={standalone ? project.desc : project.summary}
              right={index % 2 !== 0}
              rotate={index % 2 !== 0 ? 180 : 0}
            />
          </a>
          {standalone && (
            <div className="project-context">
              <p className="eyebrow">زمینه پروژه</p>
              <p className="body-copy">{project.context}</p>
            </div>
          )}
        </article>
      ))}
      {standalone ? (
        <div className="closing-note">
          <h2>پروژه بعدی می‌تواند دنیای شما باشد.</h2>
          <p className="body-copy">
            لازم نیست کسب‌وکار شما شبیه این نمونه‌ها باشد. درباره مخاطبان و
            نیازهایتان بگویید تا از مسئله خود شما شروع کنیم.
          </p>
          <Link className="text-link" href="/contact">
            پروژه‌تان را معرفی کنید <span aria-hidden="true">↖</span>
          </Link>
        </div>
      ) : (
        <Link className="text-link" href="/projects">
          آشنایی بیشتر با پروژه‌ها <span aria-hidden="true">↖</span>
        </Link>
      )}
    </Section>
  );
}
