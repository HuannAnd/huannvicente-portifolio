import ProjectsService from "@/services/projects"

import ClientSuggestion from "./Suggestion.client"

interface Props {
  repositoryId: number
}

export default async function ServerSuggestion({ repositoryId }: Props) {
  const nextProject = ProjectsService.getNextProjectByLastId(repositoryId)

  return (
    <ClientSuggestion nextProject={nextProject} />
  )
}