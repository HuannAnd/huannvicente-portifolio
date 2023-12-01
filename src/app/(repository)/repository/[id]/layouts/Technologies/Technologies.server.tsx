import GithubService from '@/services/github'
import ProjectsService from "@/services/projects"

import ClientTechnologies from './Technologies.client'

interface Props {
  repositoryId: number
}

export default async function ServerTechnologies({ repositoryId }: Props) {
  const frameworks = ProjectsService.getProjectFrameworks(repositoryId)
  const languages = await GithubService.getProjectLanguages(repositoryId)

  return (
    <>
      <ClientTechnologies frameworks={frameworks} languages={languages} />
    </>
  )
}