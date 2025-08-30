import fs from "fs";
import path from "path";

export default function getMvImages(): string[] {
  const imagesDirectory = path.join(process.cwd(), "public", "MvImages");
  const fileNames = fs.readdirSync(imagesDirectory);

  const imageFiles = fileNames.filter((fileName) => {
    const extension = path.extname(fileName).toLowerCase();
    const supportedExtensions = [".jpeg", ".jpg", ".png", ".gif", ".webp"];
    return supportedExtensions.includes(extension);
  });

  const MvImages = imageFiles.map((imageName) => `/MvImages/${imageName}`);

  return MvImages;
}
