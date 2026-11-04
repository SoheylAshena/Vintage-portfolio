interface SendButtonInterface {
  isSending: boolean;
}

const SendButton = ({ isSending }: SendButtonInterface) => {
  return (
    <button type="submit" disabled={isSending} className="send-button">
      {isSending ? <span>در حال ارسال…</span> : "ارسال پیام"}
    </button>
  );
};

export default SendButton;
