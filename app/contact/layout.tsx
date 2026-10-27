import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "برای طراحی، توسعه یا بازطراحی وب‌سایت خود با لومس گفت‌وگو کنید.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
