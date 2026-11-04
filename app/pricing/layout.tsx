import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "هزینه طراحی سایت",
  description:
    "با عوامل مؤثر بر هزینه طراحی و توسعه وب‌سایت آشنا شوید و برای پروژه خود برآورد اختصاصی بگیرید.",
};

export default function PricingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
