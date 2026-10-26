import type { Metadata } from "next";
import AboutDetails from "@/sections/about/details";
import About from "@/sections/about";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "با لومس و نگاه ما به طراحی و توسعه وب آشنا شوید.",
};

export default function AboutPage() {
  return (
    <main className="standalone">
      <About standalone />
      <AboutDetails />
    </main>
  );
}
