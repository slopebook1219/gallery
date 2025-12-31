'use client';
import Image from 'next/image';
import { ItemType } from '@/app/type';

type Props = {
  items: ItemType[];
};

export default function GalleryForItem({ items }: Props) {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="md:max-w-6xl mx-auto my-auto p-5 pt-23">
          {items.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="group relative w-full aspect-[5/4] overflow-hidden cursor-pointer"
                >
                  <Image
                    src={item.image.url}
                    alt={item.image.url || 'Gallery Image'}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="font-serif text-gray-500">{item.title}</p>
                <p className="font-serif text-gray-500 text-[14px]">{item.body}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
