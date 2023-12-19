
import * as ProjectsAssetsService from "@/app/ProjectsAssetsServices.actions"

import ClientObjective from "./Objective.client";

interface Props {
  repositoryId: number
}

export default async function ServerObjective({ repositoryId }: Props) {
  const videos = await ProjectsAssetsService.getProjectVideos(repositoryId)

  return (
    <>
      <ClientObjective videos={videos} />
    </>
  )
}