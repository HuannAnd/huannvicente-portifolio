type TDirectoryID = 599657419 | 617670848 | 624459441 | 617668310 | 12998282
type TContentOrder = 1 | 2 | 3

type URLPattern = `${TDirectoryID}/${TContentOrder}`

type TRowStrategie = "mobile" | "desktop" | "mixed"

export interface IImageContent {
  title: string,
  url: URLPattern,
  isMobile: boolean,
  isMP4: boolean
}

type TGalleryData = {
  strategy: TRowStrategie
  content: IImageContent[]
}

interface IFilosophy {
  phrase: string,
  author: string
}

export interface IProjectData {
  id: number,
  frameworks: string[]
  filosophy: IFilosophy
  gallery: TGalleryData[]
}

export type TProjectsBody = IProjectData[]