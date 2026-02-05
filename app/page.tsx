import MvSlider from './component/_item/MvSliders/ index';
import { fetchSlideImages } from './utils';
export const metadata = {
  title: '坂本大幹',
  description:
    '坂本大幹のサイトです。カメラで撮影した様々な日常のシーンを掲載しています。ぜひご覧ください。',
};
export default async function Home() {
  const data = await fetchSlideImages();

  return <MvSlider slides={data} />;
}

//
