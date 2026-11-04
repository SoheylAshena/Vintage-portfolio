import Input from "@/Assets/vectors/input.svg?react";
import Area from "@/Assets/vectors/textarea.svg?react";

export default function Inputs() {
  return (
    <>
      <label className="form-field">
        <span>نام شما</span>
        <span className="field-frame h-20">
          <input
            type="text"
            name="from_name"
            autoComplete="name"
            placeholder="نام و نام خانوادگی"
            required
            className="h-full"
          />
          <Input aria-hidden="true" />
        </span>
      </label>
      <label className="form-field">
        <span>ایمیل</span>
        <span className="field-frame h-20">
          <input
            type="email"
            name="from_email"
            autoComplete="email"
            dir="ltr"
            placeholder="you@example.com"
            required
            className="h-full"
          />
          <Input aria-hidden="true" />
        </span>
      </label>
      <label className="form-field">
        <span>درباره پروژه</span>
        <span className="field-frame min-h-60">
          <textarea
            name="message"
            rows={5}
            placeholder="کسب‌وکار ما… است. از سایت می‌خواهیم… . زمان‌بندی مدنظرمان… است."
            required
            className="min-h-[180px] resize-y"
          />
          <Area aria-hidden="true" />
        </span>
      </label>
    </>
  );
}
