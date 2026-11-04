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
    <div
      className={`border-rule grid w-full grid-cols-2 items-center gap-10 border-t py-10 max-[700px]:grid-cols-1 max-[700px]:gap-5 ${right ? "[&>div:first-child]:order-2 max-[700px]:[&>div:first-child]:order-0" : ""}`}
    >
      <div className="relative flex aspect-[2] w-full min-w-0 items-center justify-center p-6">
        <Frame className="absolute h-full w-full" />
        <Logo
          className="relative block h-auto max-h-[60%] w-4/5 max-w-[520px]"
          role="img"
          aria-label={`${name} logo`}
        />
      </div>
      <div>
        <h3 className="mb-4 text-4xl">{title}</h3>
        <p className="body-copy mb-0">{desc}</p>
        <span className="border-rule mt-6 inline-block border-b pb-1.5 text-base">
          مشاهده وب‌سایت
        </span>
      </div>
    </div>
  );
};

export default Project;
