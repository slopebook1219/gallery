import Gallery from '@/app/component/Gallery';
import { fetchNatureImages } from '@/app/nature/utils';

export default async function NatureIndex() {
  const natures = await fetchNatureImages();
  return <Gallery images={natures} />;
}
