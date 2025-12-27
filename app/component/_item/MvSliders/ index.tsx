'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type Props = {
  slides: {
    image: {
      url: string;
      height: number;
      width: number;
    };
  }[];
};

export default function MvSlider({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }

  function handleClick() {
    nextSlide();
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, slides.length]);

  return (
    <div className="relative w-full h-screen cursor-pointer" onClick={handleClick}>
      {slides.map((item, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 w-[85%] h-[80%] mx-auto my-auto
            transition-opacity duration-2000 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <Image
            src={item.image.url}
            alt="MV"
            fill
            className="object-contain"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
