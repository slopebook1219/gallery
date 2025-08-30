// フィルムギャラリー用のイメージリスト
export type FilmImageType = {
  id: number;
  src: string;
  alt: string;
  camera?: string;
  film?: string;
  comment?: string;
};
export const FilmImages = [
  {
    id: 1,
    src: "/film/2025082819391067.JPG",
    alt: "Dreapでパシャリ",
    camera: "NATURA CLASSICA",
    film: "kodak Color Plus",
  },
  {
    id: 2,
    src: "/film/2025082819440843.JPG",
    alt: "新幹線の窓から田んぼ",
    camera: "NATURA CLASSICA",
    film: "kodak Color Plus",
  },
  {
    id: 3,
    src: "/film/2025082819441026.JPG",
    alt: "100年記念館天井",
    camera: "NATURA CLASSICA",
    film: "kodak Color Plus",
  },
  {
    id: 4,
    src: "/film/2025082819441076.JPG",
    alt: "宮島BEAMS",
    camera: "NATURA CLASSICA",
    film: "kodak Color Plus",
  },
  {
    id: 5,
    src: "/film/2025082819441376.JPG",
    alt: "宮島ボートレース場",
    camera: "NATURA CLASSICA",
    film: "kodak Color Plus",
  },
  {
    id: 6,
    src: "/film/2025082819441176.JPG",
    alt: "Cueトートバック",
    camera: "NATURA CLASSICA",
    film: "kodak Color Plus",
  },
];
