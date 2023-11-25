// import Gallery from "./layouts/Gallery/Gallery.server"
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

import isImage from "@/utils/is-image"
import isVideo from "@/utils/is-video"


enum Params {
  ID = "id"
}

export const generateMetadata = ({
  params,
}: {
  params: { [key in Params]: key extends Params.ID ? number : never }
}) => GithubService.getMetadataRepository(params.id)

export default async function RepositoryPage({
  params,
}: {
  params: { [key in Params]: key extends Params.ID ? string : never }
}) {
  const repositoryId = Number(params.id)

  return (
    <>
      <Hero repositoryId={repositoryId} />
      <Gallery repositoryId={repositoryId} />
      <Quote repositoryId={repositoryId} />
      <Suggestion repositoryId={repositoryId} />
    </>
  )
}