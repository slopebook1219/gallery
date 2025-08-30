"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FilmImages } from "../../_constant";
import { FilmImageType } from "../../_constant";
import FilmModal from "../../_item/filmModal";

export default function FilmGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          FilmImages.map(
            (image) =>
              new Promise<void>((resolve, reject) => {
                const img = new window.Image();
                img.src = image.src;
                img.onload = () => resolve();
                img.onerror = () =>
                  reject(new Error(`Failed to load image at ${image.src}`));
              })
          )
        );
        setAllImagesLoaded(true);
      } catch (error) {
        console.error("画像読み込み中にエラーが発生しました", error);
        setAllImagesLoaded(true);
      }
    };
    preloadImages();
  }, []);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === FilmImages.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === 0 ? FilmImages.length - 1 : prevIndex - 1;
    });
  };

  const selectedImage =
    selectedImageIndex !== null ? FilmImages[selectedImageIndex] : null;

  return (
    <>
      <div className="relative min-h-screen md:p-8 mt-20 md:mt-15">
        <div
          className={`
            grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 max-w-5xl md:max-w-6xl mx-auto p-4
            transition-opacity duration-500
            ${allImagesLoaded ? "opacity-100" : "opacity-0"}
          `}
        >
          {FilmImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative w-full aspect-square overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
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
          ))}
        </div>
      </div>
      {selectedImage && (
        <FilmModal
          selectedImage={selectedImage}
          onClose={handleCloseModal}
          allImages={FilmImages}
        />
      )}
    </>
  );
}
