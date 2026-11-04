import { useRef, useState } from "react";

const useContact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    const formElement = form.current;

    setIsSending(true);
    setError(null);

    import("@emailjs/browser")
      .then(({ default: emailjs }) => emailjs.sendForm(
        "service_srvdg09",
        "template_564qdoo",
        formElement,
        "aXwBSC3r1y427hVfk",
      ))
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        form.current?.reset();
      })
      .catch((error) => {
        setIsSending(false);
        setError(
          `پیام ارسال نشد. لطفاً اتصال اینترنت را بررسی کنید و دوباره تلاش کنید.`,
        );
        console.error("Error sending email:", error.message);
      });
  };
  return { isSending, isSent, error, sendEmail, form };
};

export default useContact;
