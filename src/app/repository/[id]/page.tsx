import Gallery from "./layouts/Gallery"

import Hero from "./layouts/Hero"
import Quote from "./layouts/Quote"
import Suggestion from "./layouts/Suggestion"

import ProjectsService from '@/services/projects'
import GithubService from "@/services/github"

import fs from 'fs'
import fsPromise from 'node:fs/promises'
import path from "path"
import { getPlaiceholder } from "plaiceholder"


enum Params {
  ID = "id"
}

export const generateMetadata = ({
  params,
}: {
  params: { [key in Params]: key extends Params.ID ? number : never }
}) => GithubService.getMetadataRepository(params.id)

function isImage(filename: string) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']; // Adicione mais extensões se necessário
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

function getAllPhotosPathById(projectId: number) {
  const pathname = path.join(`./public/projects/${projectId}`)
  const directoryContent = fs.readdirSync(pathname)

  const allPhotosPath = directoryContent.map(filename => {
    if (!isImage(filename)) return null
    return `/projects/${projectId}/${filename}`

  }).filter(x => !!x) as string[]
  console.log("allPhotosPath value: ", allPhotosPath)

  return allPhotosPath
}

async function createFallbackImage(src: string) {
  const fileInBuffer = await fsPromise.readFile(`./public${src}`)
  console.log("file: ", fileInBuffer)

  const { base64 } = await getPlaiceholder(fileInBuffer)

  return base64
}

async function createPhotosWithFallback(photos: string[]) {
  let photosWithFallback: { src: string, fallbackSrc: string }[] = []
  for (const src of photos) {
    const fallbackSrc = await createFallbackImage(src)

    photosWithFallback.push({
      src,
      fallbackSrc
    })
  }

  return photosWithFallback
}

export default async function RepositoryPage({
  params,
}: {
  params: { [key in Params]: key extends Params.ID ? string : never }
}) {
  const id = Number(params.id)

  const metadata = await GithubService.getMetadataRepository(id)
  const { author, phrase } = ProjectsService.getProjectPhilosophy(id)
  const photos = getAllPhotosPathById(id)
  const photosWithFallback = await createPhotosWithFallback(photos)


  return (
    <>
      <Hero {...metadata} />
      <Gallery photos={photosWithFallback} />
      <Quote author={author} phrase={phrase} />
      <Suggestion />
    </>
  )
}