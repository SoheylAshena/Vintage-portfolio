import type { Metadata } from "next";
import Navbar from "@/sections/navbar";
import "./globals.css";
import SmoothScroll from "./Components/smooth-scroll-content";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
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
      <body className="bg-bg text-primary font-body">
        <Navbar />

        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-2 bg-[url('/images/Texture.jpg')] bg-repeat bg-size-[10%] opacity-50 mix-blend-hard-light brightness-[0.6] saturate-0 max-[1100px]:bg-size-[50%]"
        />
        <SmoothScroll />
      </body>
    </html>
  );
}
