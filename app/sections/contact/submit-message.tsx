import styles from "./contact.module.css";

interface SubmitMessageInterface {
  isSent: boolean;
  error: string | null;
}

const SubmitMessage = ({ isSent, error }: SubmitMessageInterface) => {
  return (
    <div role="status" aria-live="polite">
      {isSent && (
        <p className={styles.success}>
          پیام شما با موفقیت ارسال شد. از آشنایی با شما خوشحالیم.
        </p>
      )}
      {error && <p className={styles.fail}>{error}</p>}
    </div>
  );
};

export default SubmitMessage;
