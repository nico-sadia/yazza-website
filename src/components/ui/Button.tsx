import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  path?: string;
}
export default function Button({ children, path, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="rounded-xl border-2 border-stone-700 bg-stone-800 px-2 py-1 transition-all hover:bg-stone-600"
    >
      {children}
    </button>
  );
}
