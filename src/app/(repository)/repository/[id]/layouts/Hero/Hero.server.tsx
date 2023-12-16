import GithubService from '@/services/github'

import ClientHero from "./Hero.client"

interface Props {
  repositoryId: number
}


export default async function ServerHero({ repositoryId }: Props) {
  const { title, description } = await GithubService.getMetadataRepository(repositoryId)
  // const gltfManager: GLTFManager = new GLTFManager()

  // const gltfModelPathname = await ProjectsService.getRepositoryGLTFAssetById(repositoryId)
  // const blenderObject = transformGLTFModelInJSXElement(gltfModel)

  return (
    <ClientHero title={title} description={description} />
  )
}