import MvSlider from "./component/_item/MvSliders/ index";
import getMvImages from "./utils/getMvImages";
export const metadata = {
  title: "sakamoto taiki",
  description: "坂本大幹のサイト",
}
export default function Home() {
  const mvImages = getMvImages();

  return <MvSlider images={mvImages} />;
}
