"use client";
import { useState, useEffect } from "react"; // useEffectを再度インポート
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

  // モーダルが開かれたとき、または選択画像が変更されたときに、現在の画像とその次の画像をプリロード
  useEffect(() => {
    const preloads: FilmImageType[] = [];

    // 1. 現在選択されている画像をプリロード対象に追加
    if (selectedImage) {
      preloads.push(selectedImage);
    }

    // 2. 次のスライドの画像もプリロード対象に追加 (以前のonSlideChangeと同じロジック)
    // ただし、モーダルが開いた時点ではまだSwiperが初期化されていない可能性があるので、
    // initialIndexを使って次の画像を計算します。
    if (initialIndex !== -1) {
      const nextIndex = (initialIndex + 1) % allImages.length;
      if (allImages[nextIndex]) {
        preloads.push(allImages[nextIndex]);
      }
    }

    // 重複を避けるためにSetを使う（厳密にはidでフィルタリングする方が良いが、今回はシンプルに）
    const uniquePreloads = Array.from(
      new Set(preloads.map((img) => img.id))
    ).map((id) => preloads.find((img) => img.id === id)!);

    setImagesToPreload(uniquePreloads);
  }, [selectedImage, initialIndex, allImages]); // selectedImageが変更されたときに発火

  // スライドが変更されたときに次の画像をプリロード (これは以前のロジックを維持)
  const handleSlideChange = (swiper: SwiperCore) => {
    const nextIndex = (swiper.realIndex + 1) % allImages.length;
    const currentPreloads = [...imagesToPreload]; // 既存のプリロードリストを取得

    // 次の画像をプリロードリストに追加（重複しないように）
    if (
      allImages[nextIndex] &&
      !currentPreloads.some((img) => img.id === allImages[nextIndex].id)
    ) {
      currentPreloads.push(allImages[nextIndex]);
    }
    setImagesToPreload(currentPreloads);
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
