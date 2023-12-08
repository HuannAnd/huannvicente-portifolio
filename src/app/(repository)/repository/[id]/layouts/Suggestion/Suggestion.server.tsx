import ProjectsService from "@/services/projects"
import * as ProjectsAssetsService from '@/app/ProjectsAssetsServices.actions'

import ClientSuggestion from "./Suggestion.client"



interface Props {
  repositoryId: number
}

export default async function ServerSuggestion({ repositoryId }: Props) {
  const nextProject = ProjectsService.getNextProjectByLastId(repositoryId)
  let nextProjectPosterSrc = await ProjectsAssetsService.getProjectPoster(nextProject.id)
  console.log("Next project poster pathname: ", nextProjectPosterSrc)


  return (
    <ClientSuggestion nextProjectPhotoSrc={nextProjectPosterSrc} nextProject={nextProject} />
  )
}