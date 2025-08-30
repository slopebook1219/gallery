import React from "react";
export default function HamburgerIcon({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-10 flex-col items-center justify-center space-y-2"
    >
      <span
        className={`block h-[1px] w-8 rounded-full bg-gray-500 transition-transform duration-300 ease-in-out
          ${isOpen ? "w-9 rotate-45 translate-y-2 bg-white" : ""}
        `}
      ></span>
      <span
        className={`block h-[1px] w-8 rounded-full bg-gray-500 transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-0" : ""}
        `}
      ></span>
      <span
        className={`block h-[1px] w-8 rounded-full bg-gray-500 transition-transform duration-300 ease-in-out
          ${isOpen ? "w-9 -rotate-45 -translate-y-[10px] bg-white" : ""}
        `}
      ></span>
    </button>
  );
}
