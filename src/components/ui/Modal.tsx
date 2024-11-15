import { ReactNode, useState } from "react";
import Button from "./Button";

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
      <div
        onClick={() => toggleModal()}
        className="fixed inset-0 flex w-screen items-center justify-center bg-slate-700 bg-opacity-80 backdrop-blur-sm"
      >
        <div className="flex h-screen w-screen flex-row flex-wrap items-center justify-center gap-8 opacity-100">
          <div className="w-60 drop-shadow-lg md:w-80 lg:w-96">{children}</div>
          <div className="h-3/5 w-60 drop-shadow-lg md:w-80 lg:w-96">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
