"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface MvSliderProps {
  images: string[];
}

export default function MvSlider({ images }: MvSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-[85%] h-[85vh] max-w-screen-xl mx-auto overflow-hidden">
          {images.map((imagePath, index) => (
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
    </div>
  );
}
