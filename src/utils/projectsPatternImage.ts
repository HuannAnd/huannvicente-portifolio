export default function projectsResourcePattern(resource: string, isFallback = false, isVideo = false) {
  if (isVideo && isFallback) return '/projects/fallback-video.png' 
  if (isVideo) return `/projects/${resource}/video.mp4`
  if (isFallback) return '/projects/fallback.png'
  return `/projects/${resource}/image.png`
}