import GithubService from '@/services/github'
import ProjectsService from "@/services/projects"

import ClientTechnologies from './Technologies.client'

interface Props {
  repositoryId: number
}

export default async function ServerTechnologies({ repositoryId }: Props) {
  const frameworks = ProjectsService.getProjectFrameworks(repositoryId)
  let languagesInAscendingPercentage = await GithubService.getProjectLanguages(repositoryId)
  languagesInAscendingPercentage = languagesInAscendingPercentage.sort((a, b) => a.percentage - b.percentage)

  return (
    <>
      <ClientTechnologies frameworks={frameworks} languages={languagesInAscendingPercentage} />
    </>
  )
}