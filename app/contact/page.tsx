import type { Metadata } from "next";
import ContactQuestions from "@/sections/contact/questions";
import Contact from "@/sections/contact";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "برای طراحی، توسعه یا بازطراحی وب‌سایت خود با لومس گفت‌وگو کنید.",
};

export default function ContactPage() {
  return (
    <main className="standalone">
      <Contact standalone />
      <ContactQuestions />
    </main>
  );
}
