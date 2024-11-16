import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function TextInput({ label, ...props }: TextInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id} className="text-sm text-slate-500">
        {label}
      </label>
      <input
        {...props}
        id={props.id}
        type="text"
        className="rounded-md border-[1px] border-solid border-slate-300"
      ></input>
    </div>
  );
}
