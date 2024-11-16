import { ReactNode, useState } from "react";
import Button from "./Button";
import Image from "./Image";

type ModalProps = {
  children: ReactNode;
  content: ReactNode;
};

export default function Modal({ children, content }: ModalProps) {
  const [active, setActive] = useState(false);

  const toggleModal = () => {
    setActive(!active);
  };

  return !active ? (
    <div
      onClick={() => toggleModal()}
      className="transition-all hover:scale-[1.025] hover:opacity-80"
    >
      {children}
    </div>
  ) : (
    <div>
      <div>{children}</div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="z-10 flex items-center justify-center">{content}</div>
        <div
          onClick={() => toggleModal()}
          className="absolute h-screen w-screen bg-slate-700 bg-opacity-80"
        ></div>
      </div>
    </div>
  );
}
