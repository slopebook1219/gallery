"use client";
import Image from "next/image";
import { useState } from "react";
import { ImageType } from "@/app/photos/_constant";

interface PhotosGalleryProps {
  images: ImageType[];
}

export default function Gallery({ images }: PhotosGalleryProps) {
  //白黒の状態管理とクリックイベント
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10 max-w-5xl md:max-w-6xl mx-auto p-10">
          {images.map((image) => {
            const isGrayscale = grayscaleImageIds.includes(image.id);
            const clipPercentage = isGrayscale ? 0 : 100;
            return (
              <div
                key={image.id}
                className="group relative w-full aspect-[5/4] w-full-[75%] overflow-hidden cursor-pointer mb-2"
                onClick={() => handleClick(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                  className="grayscale-slide-layer" 
                  style={{
                    clipPath: `inset(0 0 0 ${clipPercentage}%)`,
                  }}
                />

                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300"
                />
                <div
                  className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300
                         group-hover:opacity-50 flex items-end justify-start p-4"
                >
                  <div className="flex-col text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {image.camera && (
                      <h3 className="font-semibold text-lg">{image.camera}</h3>
                    )}
                    {image.film && (
                      <p className="font-light text-sm">{image.film}</p>
                    )}
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