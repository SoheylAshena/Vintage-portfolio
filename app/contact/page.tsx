"use client";

import ContactQuestions from "@/sections/contact/questions";
import Contact from "@/sections/contact";
import Reveal from "@/Components/reveal";

export default function ContactPage() {
  return (
    <main className="standalone">
      <Reveal>
        <Contact standalone />
      </Reveal>
      <Reveal>
        <ContactQuestions />
      </Reveal>
    </main>
  );
}
