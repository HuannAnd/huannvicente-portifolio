import Gallery from "./layouts/Gallery"
import BackToHome from "./layouts/BackToHome"
import Technologies from "./layouts/Technologies"
import Hero from "./layouts/Hero"
import Filosophy from "./layouts/Filosophy"

import ProjectsService from '@/services/projects'
import GithubService from "@/services/github"

import wait from "@/utils/wait";

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
  const id = Number(params.id);

  const projectMetadata = await GithubService.getMetadataRepository(id)

  const details = await GithubService.getRepositoryById(id)
  const languages = await GithubService.getProjectLanguages(id)
  const hasDomain = ProjectsService.projectHasDomain(id)
  const photos = ProjectsService.getProjectPhotos(id)
  const urls = ProjectsService.getProjectUrls(id)
  const info = await GithubService.getMetadataRepository(id)
  const filosophy = ProjectsService.getProjectFilosophy(id)

  const time = 1000 * 3
  await wait(time)

  return (
    <>
      <Hero {...projectMetadata} />
      <Gallery />
      <Technologies />
      <Filosophy />
      <BackToHome />
    </>
  )
}