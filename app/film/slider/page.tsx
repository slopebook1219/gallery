"use client";
import Image from "next/image";
import { FilmImages } from "../_constant";
import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function FilmSliderPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const initialImageId = searchParams.get("id");

  const initialIndex = FilmImages.findIndex(
    (img) => img.id.toString() === initialImageId
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );

  const selectedImage = FilmImages[selectedImageIndex];

  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft =
            selectedImageIndex * scrollRef.current.offsetWidth;
        }
      }, 0);
    }
  }, [selectedImageIndex]);

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === FilmImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? FilmImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white p-4 overflow-y-hidden">
      <Link href="/film" className="absolute top-4 left-4 text-gray-500 z-50">
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
      </Link>

      <div className="relative flex justify-between items-center w-full max-w-5xl">
        <button
          className="hidden md:block z-50 text-gray-500 text-3xl p-2"
          onClick={handlePrev}
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
          {FilmImages.map((image) => (
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
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          className="hidden md:block z-50 text-gray-500 p-2"
          onClick={handleNext}
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
