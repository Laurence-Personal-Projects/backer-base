import React, { ReactNode } from "react";
import Link from "next/link";

const variantClasses = {
  primary: "border border-[#FBFBE6] text-[#1E1E1E] bg-[#FBFBE6] hover:bg-[#1E1E1E] hover:text-[#F1CDE5]",
  secondary: "border border-[#FBFBE6] text-[#F1CDE5] bg-transparent hover:bg-[#FBFBE6] hover:text-[#1E1E1E]",
  danger: "border border-red-600 text-white bg-red-600 hover:bg-transparent hover:text-red-600",
  transparent_white: "border border-[#FBFBE6] text-[#FBFBE6] bg-transparent hover:bg-[#FBFBE6] hover:text-[#1E1E1E]",
  gradient_orange: "gradient-full-orange",
  none: "",
};

type VariantType = keyof typeof variantClasses;

interface AnchorButtonProps {
  additionalClassName?: string;
  href?: string;
  targetBlank?: boolean;
  download?: boolean;
  children?: ReactNode;
  variant?: VariantType;
}

const AnchorButton: React.FC<AnchorButtonProps> = ({
  additionalClassName = "",
  href = "#",
  targetBlank = false,
  download = false,
  children,
  variant = "none",  //default callback
}) => {
  const baseClasses = variantClasses[variant] || "";

  return (
    <div>
      <Link
        href={href}
        target={targetBlank ? "_blank" : "_self"}
        rel={targetBlank ? "noopener noreferrer" : undefined}
        download={download || undefined}
        className={`inline-block rounded-[40px] border-solid linear duration-300 ext-[14px] lg:text-[16px] ${baseClasses} ${additionalClassName}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default AnchorButton;
