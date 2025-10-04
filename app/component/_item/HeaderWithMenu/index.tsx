"use client";
import { useState } from "react";
import Link from "next/link";
import HamburgerIcon from "../HamburgerIcon"; 


export default function HeaderWithMenu(){
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-7 right-7 z-50">
        <HamburgerIcon isOpen={isOpen} onClick={handleMenuToggle} />
      </div>
      <div
        className={`
          fixed inset-0 z-30
          transition-opacity duration-1000 ease-in-out
          ${isOpen ? "opacity-40 bg-black" : "opacity-0 pointer-events-none"}
        `}
        onClick={handleMenuToggle}
      ></div>
      <div
        className={`
          fixed inset-y-0 right-0 md:w-64 w-35 text-white z-40
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav className="pt-20 ">
          <ul>
            <li className="py-3 md:px-4 cursor-pointer text-2xl">
              <Link href="/" onClick={handleMenuToggle}>
                home
              </Link>
            </li>
            <li className="py-3 md:px-4 cursor-pointer text-2xl">
              <Link href="/photos" onClick={handleMenuToggle}>
                photos
              </Link>
            </li>
            <li className="py-3 md:px-4 cursor-pointer text-2xl">
              <Link href="/nature" onClick={handleMenuToggle}>
                nature
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
