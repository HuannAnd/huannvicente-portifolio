import ProjectsService from '@/services/projects'


export default function useFilosophy(projectId: number) {
  const filosophy = ProjectsService.getProjectFilosophy(projectId)

  return filosophy
}