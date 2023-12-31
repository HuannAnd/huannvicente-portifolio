// import * as ProjectsAssetsService from "@/app/ProjectsAssetsServices.actions"
import ProjectsService from "@/services/projects"

import ClientDesignConcept from "./DesignConcept.client"

interface Props { repositoryId: number }

export default async function ServerDesignConcept({ repositoryId }: Props) {
  const images = [
    `/projects/${repositoryId}/1.jpg`,
    `/projects/${repositoryId}/2.jpg`
  ]
  const designConceptText = ProjectsService.getRepositoryDesignConceptCopyright(repositoryId)

  return (
    <>
      <ClientDesignConcept images={images}>
        {designConceptText}
      </ClientDesignConcept>
    </>
  )
}