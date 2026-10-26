import styles from "./contact.module.css";
import Input from "@/Assets/vectors/input.svg?react";
import Area from "@/Assets/vectors/textarea.svg?react";

export default function Inputs() {
  return (
    <>
      <label className={styles.field}>
        <span>نام شما</span>
        <span className={styles.smallInput}>
          <input
            type="text"
            name="from_name"
            autoComplete="name"
            placeholder="نام و نام خانوادگی"
            required
          />
          <Input aria-hidden="true" />
        </span>
      </label>
      <label className={styles.field}>
        <span>ایمیل</span>
        <span className={styles.smallInput}>
          <input
            type="email"
            name="from_email"
            autoComplete="email"
            dir="ltr"
            placeholder="you@example.com"
            required
          />
          <Input aria-hidden="true" />
        </span>
      </label>
      <label className={styles.field}>
        <span>درباره پروژه</span>
        <span className={styles.textArea}>
          <textarea
            name="message"
            rows={5}
            placeholder="کسب‌وکار ما… است. از سایت می‌خواهیم… . زمان‌بندی مدنظرمان… است."
            required
          />
          <Area aria-hidden="true" />
        </span>
      </label>
    </>
  );
}
