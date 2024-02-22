import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#2d2d2c]">
      <div className="relative flex items-center justify-start gap-2 px-4">
        <div className="relative w-12 h-20">
          <Image alt="logo" src="/jarvis.png" fill />
        </div>
        <h1 className="text-white text-xl">Jarvis AI</h1>
      </div>
    </div>
  );
};

export default Header;
