import Gallery from "@/layouts/Gallery"
import BackToHome from "@/layouts/BackToHome"
import Technologies from "@/layouts/Technologies"
import Overview from "@/layouts/Overview"
import Filosophy from "@/layouts/Filosophy"

import projects from '@/services/projects'
import GithubService from "@/services/github"

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

  const overviewProps = {
    domain_url: repository.domain_url,
    hasDomain: repository.hasDomain,
    repository_url: repository.repository_url,
    name: repoDetails.name,
    description: repoDetails.description
  } as React.ComponentProps<typeof Overview>

  const time = 1000 * 3
  await wait(time)

  return (
    <>
      <Overview {...overviewProps} />
      <Gallery photos={repository.gallery} />
      <Technologies frameworks={repository.frameworks} languages={languages} />
      <Filosophy {...repository.filosophy} />
      <BackToHome id={id} />
    </>
  )
}