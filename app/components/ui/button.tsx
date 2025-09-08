import React, { ReactNode, ButtonHTMLAttributes } from "react";

const variantClasses = {
  primary:
    "border border-[#FBFBE6] text-[#1E1E1E] bg-[#FBFBE6] hover:bg-[#1E1E1E] hover:text-[#F1CDE5]",
  secondary:
    "border border-[#FBFBE6] text-[#F1CDE5] bg-transparent hover:bg-[#FBFBE6] hover:text-[#1E1E1E]",
  danger:
    "border border-red-600 text-white bg-red-600 hover:bg-transparent hover:text-red-600",
  warning:
    "border border-orange-600 text-white bg-orange-600 hover:bg-transparent hover:text-orange-600",
  info:
    "border border-blue-600 text-white bg-blue-600 hover:bg-transparent hover:text-blue-600",
  transparent_white:
    "border border-[#FBFBE6] text-[#FBFBE6] bg-transparent hover:bg-[#FBFBE6] hover:text-[#1E1E1E]",
  gradient_orange: "gradient-full-orange",
  outline: "border border-gray-400 border-solid hover:bg-gray-black hover:text-white hover:border-white",
  none: "",
};

type VariantType = keyof typeof variantClasses;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClassName?: string;
  variant?: VariantType;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  additionalClassName = "",
  variant = "outline", // 👈 Default to "outline"
  children,
  type = "button", // 👈 Default to "button"
  ...rest // 👈 Spread rest of the props
}) => {
  const baseClasses = variantClasses[variant] || "";

  return (
    <button
      type={type}
      className={`inline-block rounded-[40px] border-solid duration-300 text-[14px] lg:text-[16px] px-[16px] py-[8px] transition-all duration-300 ${baseClasses} ${additionalClassName}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
