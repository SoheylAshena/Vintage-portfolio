import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description: "گزیده‌ای از پروژه‌های طراحی و توسعه وب در لومس.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
