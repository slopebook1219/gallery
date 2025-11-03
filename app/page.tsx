import MvSlider from "./component/_item/MvSliders/ index";
import getMvImages from "./utils/getMvImages";
export const metadata = {
  title: "坂本大幹",
  description:
    "坂本大幹のサイトです。カメラで撮影した様々な日常のシーンを掲載しています。ぜひご覧ください。",
};
export default function Home() {
  const mvImages = getMvImages();

  return <MvSlider images={mvImages} />;
}
