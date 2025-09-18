import FilmGallery from "./_component/FilmGallery";
import getGalleryImages from "./utils/getGalleryImages";

const galleryImages = getGalleryImages();

export default function Film() {
  return <FilmGallery images={galleryImages} />;
}
