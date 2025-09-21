import Gallery from "./_component/Gallery";
import getGalleryImages from "./utils/getImages";

const galleryImages = getGalleryImages();

export default function Photos() {
  return <Gallery images={galleryImages} />;
}
