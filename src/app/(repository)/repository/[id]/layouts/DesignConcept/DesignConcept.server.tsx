import * as ProjectsAssetsService from "@/app/ProjectsAssetsServices.actions"

import ClientDesignConcept from "./DesignConcept.client"

interface Props { repositoryId: number }

export default async function ServerDesignConcept({ repositoryId }: Props) {
  const images = await ProjectsAssetsService.getProjectsImages(repositoryId)

  return (
    <>
      <ClientDesignConcept images={images} />
    </>
  )
}