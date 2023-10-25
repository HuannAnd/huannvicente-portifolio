import useProjectId from "./useProjectId"

import ProjectsService from '@/services/projects'

export default function useProjectsPhotos(projectId: number) {
  const photos = ProjectsService.getProjectPhotos(projectId)

  return photos
}