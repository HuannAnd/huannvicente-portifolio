export const height = 50
export const width = height
export const offsetY = 5
export const radius = (height - 4 * offsetY) / 6
export const finalRadius = radius * Math.sqrt(3) * 1.5
export const getCirclePosY = (nthChild: number) => radius * (2 * nthChild - 1) + (nthChild * offsetY)
export const centerX = width / 2
export const centerY = height / 2