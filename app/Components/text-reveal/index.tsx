import { useEffect, useState } from "react";

interface TextRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const TextReveal = ({
  children,
  duration = 2000,
  delay = 0,
}: TextRevealProps) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const halfDuration = duration / 2;
    const timer = setTimeout(() => setShowText(true), halfDuration + delay);
    return () => clearTimeout(timer);
  }, [delay, duration]);

  return (
    <div className="relative inline-block overflow-hidden">
      <p className={`relative ${showText ? "opacity-100" : "opacity-0"}`}>
        {children}
      </p>
      <div
        className="text-reveal-cover"
        style={{
          animationDuration: `${duration}ms`,
          animationDelay: `${delay}ms`,
        }}
      ></div>
    </div>
  );
};

export default TextReveal;
