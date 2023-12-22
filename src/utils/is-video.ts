import path from "path";

export default function isVideo(filename: string) {
  const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.wmv'];
  const ext = path.extname(filename).toLowerCase();
  return videoExtensions.includes(ext);
}