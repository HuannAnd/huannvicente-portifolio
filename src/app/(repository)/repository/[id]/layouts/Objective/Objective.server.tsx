
import * as ProjectsAssetsService from "@/app/ProjectsAssetsServices.actions"
import ProjectsService from "@/services/projects"

import ClientObjective from "./Objective.client";

interface Props {
  repositoryId: number
}

export default async function ServerObjective({ repositoryId }: Props) {
  const videos = await ProjectsAssetsService.getProjectVideos(repositoryId)
  const objetiveText = ProjectsService.getRepositoryObjetiveCopyright(repositoryId)

  return (
    <>
      <ClientObjective videos={videos} >
        {objetiveText}
      </ClientObjective>
    </>
  )
}