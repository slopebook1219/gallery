'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ImageType } from '@/app/type';

type Props = {
  images: ImageType[];
};

export default function Gallery({ images }: Props) {
  const [clipRight, setClipRight] = useState(0);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClipRight(100);
      hasRevealed.current = true;
    }, 3000); // 3秒待ってからカラー化を開始
    return () => clearTimeout(timer);
  }, []);

  const handleTap = () => {
    setClipRight((prev) => (prev === 0 ? 100 : 0));
  };

  return (
    <div className="relative min-h-screen md:p-8 mt-18 md:mt-15" onClick={handleTap}>
      <div
        className="fixed inset-0 z-[999] pointer-events-none"
        style={{
          backdropFilter: 'grayscale(1)',
          WebkitBackdropFilter: 'grayscale(1)',
          clipPath: `inset(0 ${clipRight}% 0 0)`,
          transition: 'clip-path 4s ease',
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10 md:max-w-6xl mx-auto p-4">
        {images.map((item, index) => {
          const isPriority = index < 3;
          return (
            <div key={index} className="group relative w-full aspect-[5/4] overflow-hidden mb-8">
              <Image
                src={item.image.url}
                alt={item.camera || 'Gallery Image'}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={isPriority}
                className="object-contain"
              />
              <div
                className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300
                       group-hover:opacity-50 flex items-end justify-start p-4"
              >
                <div className="flex-col text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.camera && <h3 className="font-semibold text-lg">{item.camera}</h3>}
                  {item.film && <p className="font-light text-sm">{item.film}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
