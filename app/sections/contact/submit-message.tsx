interface SubmitMessageInterface {
  isSent: boolean;
  error: string | null;
}

const SubmitMessage = ({ isSent, error }: SubmitMessageInterface) => {
  return (
    <div role="status" aria-live="polite">
      {isSent && (
        <p className="text-lg text-[#31512e]">
          پیام شما با موفقیت ارسال شد. از آشنایی با شما خوشحالیم.
        </p>
      )}
      {error && <p className="text-lg text-[#922e20]">{error}</p>}
    </div>
  );
};

export default SubmitMessage;
