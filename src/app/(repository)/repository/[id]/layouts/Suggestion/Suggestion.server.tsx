import ProjectsService from "@/services/projects"
// import * as ProjectsAssetsService from '@/app/ProjectsAssetsServices.actions'

import ClientSuggestion from "./Suggestion.client"
import ProjectSquareCard from "./ProjectSquareCard"



interface Props {
  repositoryId: number
}

export default async function ServerSuggestion({ repositoryId }: Props) {
  const otherProjects = ProjectsService
    .getProjects()
    .filter(x => x.id !== repositoryId)

  return (
    <ClientSuggestion>
      {otherProjects.map((x, i) => <ProjectSquareCard key={`ProjectSquareCard_${i}`} {...x} />)}
    </ClientSuggestion>
  )
}