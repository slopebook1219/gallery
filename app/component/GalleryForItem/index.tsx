'use client';
import Image from 'next/image';
import { ItemType } from '@/app/type';

type Props = {
  items: ItemType[];
};

export default function GalleryForItem({ items }: Props) {
  return (
    <div className="min-h-screen">
      <div className="md:max-w-6xl mx-auto p-5 md:pt-30 pt-23">
        {items.map((item, index) => (
          <div key={index}>
            <div
              className="
                mx-auto
                w-full
                md:w-2/4
              "
            >
              <Image
                src={item.image.url}
                alt={item.title || 'Gallery Image'}
                width={1200}
                height={960}
                className="w-full h-auto"
              />
            </div>
            <div
              className="
                mx-auto
                w-full
                md:w-2/4
                mt-2
              "
            >
              <p className="font-serif text-gray-800 md:text-[25px]">{item.title}</p>
              <p className="font-serif text-gray-800 md:text-[18px] text-[14px]">{item.body}</p>
              <p className="font-serif text-gray-500 md:text-[18px] text-[14px] pb-8">
                {item.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
