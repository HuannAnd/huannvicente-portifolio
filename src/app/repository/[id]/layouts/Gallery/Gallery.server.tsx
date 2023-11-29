import ProjectsService from "@/services/projects"

import path from "path";

import fs from "fs/promises"

import ClientGallery from "./Gallery.client";

import Snapshot from "./Snapshot";

class AssetsManager {
  public directoryPathname: string
  constructor(pathname: string | number) {
    this.directoryPathname = `${pathname}`
    console.log("Repository Directory Assets Pathname: ", this.directoryPathname)
  }

  public async getAllStaticAssets() {
    const gltfModels = this.getGLTFModels()
    const videos = this.getVideos()
    const photos = this.getPhotos()

    return {
      gltf: gltfModels,
      videos,
      photos
    }
  }

  private formatFilename(filename: string) {
    return `${this.directoryPathname}/${filename}`
  }

  private async getDirectoryContent() {
    try {
      const staticDirectoryPathname = `./public${this.directoryPathname}`
      let directoryContent = await fs.readdir(staticDirectoryPathname)
      directoryContent = directoryContent.map(x => this.formatFilename(x))

      return directoryContent
    } catch (error) {
      console.error("Error to fetch Static data from: ", this.directoryPathname)
      return []
    }
  }

  public async getPhotos() {
    const directoryContent = await this.getDirectoryContent()
    const photos = directoryContent.filter(this.isImage)

    return photos
  }

  public async getGLTFModels() {
    const directoryContent = await this.getDirectoryContent()

    const gltfFiles = directoryContent.filter(this.isGLTF)

    return gltfFiles
  }

  public async getVideos() {
    const directoryContent = await this.getDirectoryContent()

    const videos = directoryContent.filter(this.isVideo)
    return videos
  }

  private isGLTF(filename: string) {
    const gltfExtensions = ['.gltf', '.glb'];
    const ext = path.extname(filename).toLowerCase();
    return gltfExtensions.includes(ext);
  }

  private isImage(filename: string) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
    const ext = path.extname(filename).toLowerCase();
    return imageExtensions.includes(ext);
  }

  private isVideo(filename: string) {
    const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.wmv'];
    const ext = path.extname(filename).toLowerCase();
    return videoExtensions.includes(ext);
  }
}

interface Props
  extends React.PropsWithChildren {
  repositoryId: number
}


export default async function ServerGallery({ repositoryId }: Props) {
  const repositoryAssetsManager = new AssetsManager(`/projects/${repositoryId}`)
  const photos = await repositoryAssetsManager.getPhotos()
  const videos = await repositoryAssetsManager.getVideos()

  const content = videos.concat(photos)
  // console.log("Assets", content)

  return (
    <ClientGallery>
      {content.map((x, index) => <Snapshot key={`Snapshot_${index}`} index={index} alt="Snapshot" src={x} />)}
    </ClientGallery>
  )
}