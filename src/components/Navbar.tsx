import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex min-w-full flex-row items-center gap-6 p-6 sm:gap-8 md:gap-12">
        <img src="/src/assets/burgermenu.svg" className="max-w-10"></img>
        <h1 className="text-center text-2xl font-bold">Yasmin Sadia</h1>
        <div className="ml-auto mr-4 flex flex-row gap-12 max-sm:hidden">
          <h1>about</h1>
          <h1>contact</h1>
        </div>
      </div>
    </>
  );
}
