"use client";

import ContactQuestions from "@/sections/contact/questions";
import Contact from "@/sections/contact";

export default function ContactPage() {
  return (
    <main className="standalone">
      <Contact standalone />
      <ContactQuestions />
    </main>
  );
}
