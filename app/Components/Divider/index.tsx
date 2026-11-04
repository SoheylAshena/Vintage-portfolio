import DividerSvg from "@/Assets/vectors/divider.svg?react";

const Divider = () => {
  return (
    <div className="section-gutter flex justify-center max-[1100px]:px-5">
      <DividerSvg className="w-4/5 max-[1100px]:w-full" />
    </div>
  );
};

export default Divider;
