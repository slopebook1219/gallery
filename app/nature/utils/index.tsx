import { client } from '@/libs/client';
export async function fetchNatureImages() {
  const data = await client.get({
    endpoint: 'nature',
    queries: {
      fields: ['image', 'camera', 'lens', 'film'],
    },
  });
  return data.contents;
}
