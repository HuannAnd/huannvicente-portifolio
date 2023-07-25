import GithubService from "@/services/github"

import Gallery from "@/layouts/Gallery";
import BackToHome from "@/layouts/BackToHome";
import Technologies from "@/layouts/Technologies";
import Overview from "@/layouts/Overview";
import Filosophy from "@/layouts/Filosophy";

import projects from '@/services/projects'
import wait from "@/utils/wait";


export default async function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const id = eval(params.id) as number;
  const repoDetails = await GithubService.getRepositoryById(id)
  const languages = await GithubService.getProjectLanguages(id)
  const repository = projects.find(x => x.id === id)!

  const time = 1000 * 1
  await wait(time)

  return (
    <>
      <Overview name={repoDetails.name} description={repoDetails.description} />
      <Gallery photos={repository.gallery} />
      <Technologies frameworks={repository.frameworks} languages={languages} />
      <Filosophy {...repository.filosophy} />
      <BackToHome />
    </>
  )
}