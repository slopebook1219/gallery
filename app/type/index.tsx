export type ImageType = {
  image: ImageUrl;
  camera: string;
  lens?: string;
  film?: string;
};
export type ImageUrl = {
  url: string;
};

export type ItemType = {
  image: ImageUrl;
  title: string;
  body?: string;
};
