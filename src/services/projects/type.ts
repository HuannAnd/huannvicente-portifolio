type TDirectoryID = 599657419 | 617670848 | 624459441 | 617668310 | 12998282
type TContentOrder = 1 | 2 | 3
type URLPattern = `${TDirectoryID}/${TContentOrder}`

export interface IImageContent {
  path: URLPattern,
  isMobile: boolean,
  isVideo: boolean
}
export type TGalleryData = IImageContent[]
export interface IProjectData {
  id: TDirectoryID,
  name: string
  has_domain: boolean
  domain_url?: string
  repository_url: string,
  isInMaintenance: boolean
}

export type TProjectsBody = IProjectData[]
