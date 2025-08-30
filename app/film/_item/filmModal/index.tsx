"use client";
import { useState } from "react";
import Image from "next/image";
import { FilmImageType } from "../../_constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";

interface FilmModalProps {
  selectedImage: FilmImageType;
  onClose: () => void;
  allImages: FilmImageType[];
}

function PreloadImages({
  imagesToPreload,
}: {
  imagesToPreload: FilmImageType[];
}) {
  return (
    <>
      {imagesToPreload.map((img) => (
        <Image
          key={img.id}
          src={img.src}
          alt={img.alt}
          width={900}
          height={900}
          priority
          style={{ display: "none" }}
        />
      ))}
    </>
  );
}

export default function FilmModal({
  selectedImage,
  onClose,
  allImages,
}: FilmModalProps) {
  const initialIndex = allImages.findIndex(
    (img) => img.id === selectedImage.id
  );

  const [imagesToPreload, setImagesToPreload] = useState<FilmImageType[]>([]);

  const handleSlideChange = (swiper: SwiperCore) => {
    const nextIndex = (swiper.realIndex + 1) % allImages.length;

    const preloads = [];
    if (allImages[nextIndex]) {
      preloads.push(allImages[nextIndex]);
    }
    setImagesToPreload(preloads);
  };

  return (
    <div className="fixed inset-0 bg-opacity-90 z-50 flex flex-col justify-center items-center p-4 bg-white overflow-y-hidden">
      <PreloadImages imagesToPreload={imagesToPreload} />

      <button
        className="absolute top-4 right-4 text-gray-500 z-50"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x-icon lucide-x h-10 w-10"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <div className="relative flex justify-between items-center w-full max-w-5xl">
        <Swiper
          initialSlide={initialIndex}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="w-full h-full"
          onSlideChange={handleSlideChange}
        >
          {allImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="flex-shrink-0 flex justify-center items-center w-full h-full">
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={900}
                    objectFit="contain"
                    className="max-w-full max-h-[80vh] w-auto h-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <div className="mt-4 text-black text-center">
        {selectedImage.camera && (
          <p className="font-semibold">{selectedImage.camera}</p>
        )}
        {selectedImage.film && (
          <p className="font-light">{selectedImage.film}</p>
        )}
      </div>
    </div>
  );
}
