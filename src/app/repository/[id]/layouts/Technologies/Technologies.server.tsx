import GithubService from '@/services/github'
import ProjectsService from "@/services/projects"

import ClientTechnologies from './Technologies.client'

interface Props {
  repositoryId: number
}

export default async function ServerTechnologies({ repositoryId }: Props) {
  const frameworks = ProjectsService.getProjectFrameworks(repositoryId)
  const languages = GithubService.getProjectLanguages(repositoryId)

  return (
    <>
      <ClientTechnologies />
    </>
  )
}