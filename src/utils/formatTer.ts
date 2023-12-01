export default function formatTier(nthTier: number): string {
  if (nthTier < 10) return `0${nthTier}`
  return `${nthTier}`
}