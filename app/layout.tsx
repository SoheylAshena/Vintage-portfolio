import type { Metadata } from "next";
import Navbar from "@/sections/navbar";
import "./globals.css";
import SmoothScroll from "./Components/smooth-scroll-content";

export const metadata: Metadata = {
  title: {
    default: "لومس | طراحی و توسعه وب",
    template: "%s | لومس",
  },
  description:
    "لومس، استودیو طراحی و توسعه وب؛ طراحی رابط کاربری، ساخت وب‌سایت و بازطراحی تجربه‌های دیجیتال متناسب با کسب‌وکار شما.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />

        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>

        <div className="texture" />
        <SmoothScroll />
      </body>
    </html>
  );
}
