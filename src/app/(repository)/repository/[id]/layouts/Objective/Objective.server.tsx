
import * as ProjectsAssetsService from "@/app/ProjectsAssetsServices.actions"
import ProjectsService from "@/services/projects"

import ClientObjective from "./Objective.client";

interface Props {
  repositoryId: number
}

export default async function ServerObjective({ repositoryId }: Props) {
  const objetiveText = ProjectsService.getRepositoryObjetiveCopyright(repositoryId)
  const videoSrc = `/projects/${repositoryId}/video.mp4`

  return (
    <>
      <ClientObjective videoSrc={videoSrc}>
        {objetiveText}
      </ClientObjective>
    </>
  )
}