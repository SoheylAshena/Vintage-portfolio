"use client";

import useContact from "@/Hooks/useContact";
import Inputs from "./inputs";
import SendButton from "./send-button";
import SubmitMessage from "./submit-message";
import Section from "@/Components/Section";

import styles from "./contact.module.css";

const Contact = ({ standalone = false }: { standalone?: boolean }) => {
  const Heading = standalone ? "h1" : "h2";
  const { isSending, isSent, error, sendEmail, form } = useContact();

  return (
    <Section className={styles.contact} id="contact">
      <header className="section-heading">
        <p className="eyebrow">شروع گفت‌وگو / تماس با لومس</p>
        <Heading>شما از مقصد بگویید.</Heading>
        <p className="body-copy">
          می‌خواهید بهتر معرفی شوید، مسیر انتخاب محصول را ساده کنید یا به
          سایتتان هویت تازه‌ای بدهید؟ از تغییری که در ذهن دارید بنویسید؛ جزئیات
          مسیر را با هم روشن می‌کنیم.
        </p>
        <p className="body-copy">
          در پیام اول، معرفی کوتاه کسب‌وکار، هدف پروژه و زمان‌بندی احتمالی کافی
          است. اگر بودجه مشخصی دارید، اشاره به آن کمک می‌کند پیشنهاد متناسب‌تری
          بررسی کنیم.
        </p>
      </header>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <p className="form-note">
          همه فیلدها ضروری‌اند. ایمیلی وارد کنید که بتوانیم پاسخ گفت‌وگو را به
          آن بفرستیم.
        </p>
        <Inputs />
        <SendButton isSending={isSending} />
        <SubmitMessage isSent={isSent} error={error} />
      </form>
    </Section>
  );
};

export default Contact;
