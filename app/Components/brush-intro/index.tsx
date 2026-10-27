import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface BrushIntroProps {
  duration?: number;
  Shape: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const BrushIntro: React.FC<BrushIntroProps> = ({
  duration = 3,
  Shape,
  className,
}) => {
  const shapeRef = useRef<SVGSVGElement | null>(null);

  useGSAP(
    () => {
      gsap.from("path", {
        duration,
        drawSVG: "0%",
        ease: "power2.in",
      });
    },
    { scope: shapeRef }
  );

  return <Shape className={className} ref={shapeRef} />;
};

export default BrushIntro;
