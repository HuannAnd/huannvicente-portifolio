import GithubService from '@/services/github'
import ProjectsService from '@/services/projects'
import * as ProjectsAssetsService from '@/app/ProjectsAssetsServices.actions'

import ClientHero from "./Hero.client"
import { format } from 'date-fns'

interface Props {
  repositoryId: number
}


export default async function ServerHero({ repositoryId }: Props) {
  const { title } = await GithubService.getMetadataRepository(repositoryId)
  const poster = await ProjectsAssetsService.getProjectPoster(repositoryId)
  var creationDate = await GithubService.getRepositoryCreationDate(repositoryId)
  creationDate = format(new Date(creationDate), "yyyy',' dd 'of' LLLL")
  var siteURL = ProjectsService.getSiteURL(repositoryId)
  var repositoryURL = ProjectsService.getRepositoryURL(repositoryId)


  // const gltfManager: GLTFManager = new GLTFManager()

  // const gltfModelPathname = await ProjectsService.getRepositoryGLTFAssetById(repositoryId)
  // const blenderObject = transformGLTFModelInJSXElement(gltfModel)

  return (
    <ClientHero
      creationDate={creationDate}
      title={title}
      posterSrc={poster}
      siteURL={siteURL}
      repositoryURL={repositoryURL}
    />
  )
}