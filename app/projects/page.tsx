import type { Metadata } from "next";
import Projects from "@/sections/projects";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description: "گزیده‌ای از پروژه‌های طراحی و توسعه وب در لومس.",
};

export default function ProjectsPage() {
  return (
    <main className="standalone">
      <Projects standalone />
    </main>
  );
}
