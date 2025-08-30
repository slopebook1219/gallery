import MvSlider from "./component/_item/MvSliders/ index";
import getMvImages from "./utils/getMvImages";

export default function Home() {
  const mvImages = getMvImages();

  return (
    <>
      <MvSlider images={mvImages} />
    </>
  );
}
