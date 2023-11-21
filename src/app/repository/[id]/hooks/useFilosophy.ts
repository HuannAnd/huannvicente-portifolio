import ProjectsService from '@/services/projects'


export default function useFilosophy(projectId: number) {
  const filosophy = ProjectsService.getProjectPhilosophy(projectId)

  return filosophy
}