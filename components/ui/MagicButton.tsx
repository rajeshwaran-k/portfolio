import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  otherClasses,
  handleClick,
}: {
  title: string;
  position: string;
  icon: React.ReactNode;
  otherClasses?: string;
  handleClick?: () => void;
}) => {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {/* Border animation */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>

      {/* Inner shimmer effect */}
      <span
        className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center 
            rounded-lg bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
             bg-[length:200%_100%] animate-shimmer px-7 font-medium text-sm text-white-400 backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
