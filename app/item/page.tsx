import GalleryForItem from '@/app/component/GalleryForItem';
import { fetchItemContents } from '@/app/item/utils';

export default async function NatureIndex() {
  const contents = await fetchItemContents();
  return <GalleryForItem items={contents} />;
}
