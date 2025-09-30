import Gallery from "../component/Gallery";
import getGalleryImages from "./utils/getImages";

const galleryImages = getGalleryImages();

export default function Photos() {
  return <Gallery images={galleryImages} />;
}
