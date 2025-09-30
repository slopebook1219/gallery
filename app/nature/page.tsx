import Gallery from "../component/Gallery";
import getImages from "./utils/getImages";

const galleryImages = getImages();

export default function NatureIndex() {
  return <Gallery images={galleryImages} />;
}