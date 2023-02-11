import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Title: string;
}

export default function Button({ Title, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-[#5081FB] hover:bg-[#7BA4FC] h-14 w-full gap-2 p-4 rounded-lg outline-none ${props.className}`}
    >
      {Title}
    </button>
  );
}
