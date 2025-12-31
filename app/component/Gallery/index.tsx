'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ImageType } from '@/app/type';

type Props = {
  images: ImageType[];
};

export default function Gallery({ images }: Props) {
  const [grayscaleImageIds, setGrayscaleImageIds] = useState<number[]>([]);
  const handleClick = (id: number) => {
    setGrayscaleImageIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((prevId) => prevId !== id);
      }
      return [...prevIds, id];
    });
  };

  return (
    <>
      <div className="relative min-h-screen md:p-8 mt-18 md:mt-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10  md:max-w-6xl mx-auto p-4">
          {images.map((item, index) => {
            const isGrayscale = grayscaleImageIds.includes(index);
            const clipPercentage = isGrayscale ? 0 : 100;
            const isPriority = index < 3;
            return (
              <div
                key={index}
                className="group relative w-full aspect-[5/4] overflow-hidden cursor-pointer mb-8"
                onClick={() => handleClick(index)}
              >
                <Image
                  src={item.image.url}
                  alt={item.camera || 'Gallery Image'}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={isPriority}
                  className="object-contain"
                />
                <Image
                  src={item.image.url}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={isPriority}
                  className="grayscale-slide-layer object-contain grayscale z-10"
                  style={{ clipPath: `inset(0 0 0 ${clipPercentage}%)` }}
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
    </>
  );
}
