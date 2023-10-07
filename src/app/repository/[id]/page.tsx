import Gallery from "@/layouts/Gallery"
import BackToHome from "@/layouts/BackToHome"
import Technologies from "@/layouts/Technologies"
import Overview from "@/layouts/Overview"
import Filosophy from "@/layouts/Filosophy"

import ProjectsService from '@/services/projects'
import GithubService from "@/services/github"

import wait from "@/utils/wait";

enum Params {
  ID = "id"
}


export default async function RepositoryPage({
  params,
}: {
  params: { [key in Params]: key extends Params.ID ? number : never }
}) {
  const id = params.id;
  const details = await GithubService.getRepositoryById(id)
  const languages = await GithubService.getProjectLanguages(id)
  
  const repository = ProjectsService.find(x => x.id === id)!

  const overviewProps = {
    domain_url: repository.domain_url,
    hasDomain: repository.hasDomain,
    repository_url: repository.repository_url,
    name: details.name,
    description: details.description
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