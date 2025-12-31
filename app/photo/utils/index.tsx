import { client } from '@/libs/client';
export async function fetchPhotoImages() {
  const data = await client.get({
    endpoint: 'photo',
    queries: {
      fields: ['image', 'camera', 'lens', 'film'],
    },
  });
  return data.contents;
}
