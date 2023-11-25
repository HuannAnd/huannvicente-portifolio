import ProjectsService from "@/services/projects"

import path from "path";

import fs from "fs"

import ClientGallery from "./Gallery.client";

import Snapshot from "./Snapshot";

class AssetsManager {
  private readonly directoryPathname: string
  constructor(directoryPathname: string | number) {
    this.directoryPathname = path.join(`./public/${directoryPathname}`)
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

  private getDirectoryContent() {
    try {
      return fs.readdirSync(this.directoryPathname).map(this.formatFilename)
    } catch (error) {
      console.error("Error to fetch Static data from: ", this.directoryPathname)
      return []
    }
  }

  public async getPhotos() {
    const directoryContent = this.getDirectoryContent()
    const photos = directoryContent.filter(this.isImage)
    console.log("Photos: ", photos)

    return photos
  }

  public async getGLTFModels() {
    const directoryContent = this.getDirectoryContent()

    const gltfFiles = directoryContent.filter(this.isGLTF)

    return gltfFiles
  }

  public async getVideos() {
    const directoryContent = this.getDirectoryContent()

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
  const repositoryAssetsManager = new AssetsManager(`/projects/${repositoryId}/`)
  const photos = await repositoryAssetsManager.getPhotos()
  const videos = await repositoryAssetsManager.getVideos()

  const content = videos.concat(photos)

  return (
    <ClientGallery>
      {content.map((x, index) => <Snapshot index={index} alt="Snapshot" src={x} />)}
    </ClientGallery>
  )
}