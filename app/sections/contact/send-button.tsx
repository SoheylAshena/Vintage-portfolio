import styles from "./contact.module.css";

import Button from "@/assets/vectors/button.svg?react";

interface SendButtonInterface {
  isSending: boolean;
}

const SendButton = ({ isSending }: SendButtonInterface) => {
  return (
    <div className={`${styles.submitCon} ${isSending && styles.disabled}`}>
      <button type="submit" disabled={isSending} className={styles.button}>
        {isSending ? <span>در حال ارسال…</span> : "ارسال پیام"}
      </button>
      <Button />
    </div>
  );
};

export default SendButton;
