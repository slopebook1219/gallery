"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import getMvImages from "./utils/getMvImages";

export default function Home() {
  const mvImages = getMvImages();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (mvImages.length <= 1) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mvImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [mvImages.length]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-red-500 z-0">
      <div className="fixed top-7 right-5 z-10">
        <button className="flex h-10 w-10 flex-col items-center justify-center space-y-2">
          <span className="block h-[2px] w-8 rounded-full bg-gray-500"></span>
          <span className="block h-[2px] w-8 rounded-full bg-gray-500"></span>
          <span className="block h-[2px] w-8 rounded-full bg-gray-500"></span>
        </button>
      </div>
      <div className="relative w-[85%] h-[85vh] max-w-screen-xl mx-auto overflow-hidden">
        {mvImages.map((imagePath, index) => (
          <Image
            key={index}
            src={imagePath}
            alt={`スライド画像 ${index + 1}`}
            fill
            priority={index === 0}
            className={`
              object-contain
              transition-opacity duration-2000 ease-in-out
              ${index === currentImageIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
