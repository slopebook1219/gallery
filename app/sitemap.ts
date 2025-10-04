import { MetadataRoute } from 'next';
const BASE_URL = 'https://taikan.vercel.app'; 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily', // 頻繁に更新される場合
      priority: 1.0, // トップページなので最優先
    },
  ];
}
