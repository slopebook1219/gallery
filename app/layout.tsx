// app/layout.tsx
"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HamburgerIcon from "./component/HamburgerIcon"; // コンポーネントのパスを確認
import Link from "next/link"; // Linkコンポーネントをインポート

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
                <Link href="/film" onClick={handleMenuToggle}>
                  film
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
