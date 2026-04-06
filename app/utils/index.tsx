import fs from 'fs';
import path from 'path';
import { client } from '../../libs/client';

export async function fetchSlideImages() {
  const data = await client.get({
    endpoint: 'slide',
    queries: {
      fields: 'image',
    },
  });
  return data.contents;
}
