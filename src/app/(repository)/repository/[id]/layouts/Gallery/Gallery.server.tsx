import ClientGallery from "./Gallery.client";

import Snapshot from "./Snapshot";

import * as ProjectAssetsService from '@/app/ProjectsAssetsServices.actions'

interface Props
  extends React.PropsWithChildren {
  repositoryId: number
}


export default async function ServerGallery({ repositoryId }: Props) {
  const photos = await ProjectAssetsService.getProjectsImages(repositoryId)
  const videos = await ProjectAssetsService.getProjectVideos(repositoryId)

  const content = videos.concat(photos)

  return (
    <ClientGallery>
      {content.map((x, index) => <Snapshot key={`Snapshot_${index}`} index={index} alt="Snapshot" src={x} />)}
    </ClientGallery>
  )
}