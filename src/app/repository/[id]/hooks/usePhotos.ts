import ProjectsService from '@/services/projects'


export default function usesPhotos(projectId: number) {
  const photos = ProjectsService.getProjectPhotosById(projectId)

  return photos
}