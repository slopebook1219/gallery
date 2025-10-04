import { MetadataRoute } from 'next';
const BASE_URL = 'https://taikan.vercel.app/'; 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily', // 頻繁に更新される場合
      priority: 1.0, // トップページなので最優先
    },
    {
      url: `${BASE_URL}/photos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/nature`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // ここに他のすべてのページのURLを追加します
  ];
}
