import GithubService from '@/services/github'
import * as ProjectsAssetsService from '@/app/ProjectsAssetsServices.actions'

import ClientHero from "./Hero.client"

interface Props {
  repositoryId: number
}


export default async function ServerHero({ repositoryId }: Props) {
  const { title, description } = await GithubService.getMetadataRepository(repositoryId)
  const poster = await ProjectsAssetsService.getProjectPoster(repositoryId)
  // const gltfManager: GLTFManager = new GLTFManager()

  // const gltfModelPathname = await ProjectsService.getRepositoryGLTFAssetById(repositoryId)
  // const blenderObject = transformGLTFModelInJSXElement(gltfModel)

  return (
    <ClientHero title={title} posterSrc={poster} description={description} />
  )
}