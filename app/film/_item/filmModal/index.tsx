"use client";
import Image from "next/image";
import { FilmImageType } from "../../_constant";
import { useRef, useEffect } from "react";

interface FilmModalProps {
  selectedImage: FilmImageType;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  allImages: FilmImageType[];
}

export default function FilmModal({
  selectedImage,
  onClose,
  onPrev,
  onNext,
  allImages,
}: FilmModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const selectedIndex = allImages.findIndex(
        (img) => img.id === selectedImage.id
      );
      if (selectedIndex !== -1) {
        scrollRef.current.scrollLeft =
          selectedIndex * scrollRef.current.offsetWidth;
      }
    }
  }, [selectedImage, allImages]);

  return (
    <div className="fixed inset-0 bg-opacity-90 z-50 flex flex-col justify-center items-center p-4 bg-white overflow-y-hidden">
      {/* 閉じるボタン */}
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
        <button
          className="hidden md:block z-50 text-gray-500 text-3xl p-2"
          onClick={onPrev}
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
            className="lucide lucide-chevron-left-icon lucide-chevron-left h-12 w-12"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
        >
          {allImages.map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 snap-center flex justify-center items-center w-full md:w-[900px] h-full"
            >
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
          ))}
        </div>
        <button
          className="hidden md:block z-50 text-gray-500 p-2"
          onClick={onNext}
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
            className="lucide lucide-chevron-right-icon lucide-chevron-right w-12 h-12"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
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
