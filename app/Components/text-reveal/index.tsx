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
      <p className={`relative m-0 ${showText ? "opacity-100" : "opacity-0"}`}>
        {children}
      </p>
      <div
        className="absolute left-0 top-0 h-full w-0 bg-primary animate-[coverSlide_var(--duration)_forwards] [animation-delay:var(--delay)]"
        style={
          {
            "--duration": `${duration}ms`,
            "--delay": `${delay}ms`,
          } as React.CSSProperties & Record<string, string>
        }
      ></div>
    </div>
  );
};

export default TextReveal;
