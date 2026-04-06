import { client } from '@/libs/client';
export async function fetchItemContents() {
  const data = await client.get({
    endpoint: 'item',
    queries: {
      fields: ['image', 'title', 'body', 'comment'],
    },
  });
  return data.contents;
}
