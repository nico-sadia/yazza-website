import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  path?: string;
}
export default function Button({ children, path, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="border-[1px[] rounded-xl border-slate-300 px-2 py-1 transition-all"
    >
      {children}
    </button>
  );
}
