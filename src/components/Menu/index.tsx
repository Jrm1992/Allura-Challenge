import React, { HTMLAttributes, ReactElement } from "react";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  Title: string;
  children?: ReactElement;
}

export default function Menu({ Title, children, ...props }: MenuProps) {
  return (
    <div className={`flex flex-col min-w-[200px] gap-4 ${props.className}`}>
      <span className="tracking-[0.4em]">{Title}</span>
      {children}
    </div>
  );
}
