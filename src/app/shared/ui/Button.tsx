// src/app/shared/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
}

export const Button = ({
  label,
  primary = false,
  size = "medium",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyle =
    "rounded font-sans font-medium transition-all focus:outline-none focus:ring-2";

  const variantStyle = primary
    ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
    : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";

  const sizeStyle = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }[size];

  return (
    <button
      type="button"
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
