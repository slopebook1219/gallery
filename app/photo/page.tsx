import { fetchPhotoImages } from '@/app/photo/utils';
import Gallery from '../component/Gallery';

export default async function Photo() {
  const photos = await fetchPhotoImages();
  return <Gallery images={photos} />;
}
