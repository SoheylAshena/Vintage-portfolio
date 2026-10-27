import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "با لومس و نگاه ما به طراحی و توسعه وب آشنا شوید.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
