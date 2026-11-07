"use client";

import Frame from "@/Assets/vectors/project-frame.svg?react";
import ArenSanatLogo from "@/Assets/vectors/arnsanat.svg?react";
import JarrahTajhizLogo from "@/Assets/vectors/jarahtajhiz.svg?react";

interface ProjectProps {
  name: string;
  logo: "arnsanat" | "jarahtajhiz";
  title: string;
  desc: string;
  right?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  name,
  logo,
  title,
  desc,
  right,
}) => {
  const Logo = logo === "arnsanat" ? ArenSanatLogo : JarrahTajhizLogo;

  return (
    <div className="grid grid-cols-2 items-center gap-10 border-t border-rule py-10 max-[700px]:grid-cols-1 max-[700px]:gap-5">
      <div
        className={`relative flex aspect-[2] min-w-0 items-center justify-center p-6 ${right ? "order-2 max-[700px]:order-0" : ""}`}
      >
        <Frame className="decorative-frame" />
        <Logo
          className="relative block h-auto max-h-[60%] w-4/5 max-w-130"
          role="img"
          aria-label={`${name} logo`}
        />
      </div>
      <div>
        <h3 className="mb-4 text-4xl">{title}</h3>
        <p className="body-copy mb-0">{desc}</p>
        <span className="mt-6 inline-block border-b border-rule pb-1.5 text-base">
          مشاهده وب‌سایت
        </span>
      </div>
    </div>
  );
};

export default Project;
