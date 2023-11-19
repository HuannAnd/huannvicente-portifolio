import ProjectsService from '@/services/projects'

export default function useFrameworks(projectId: number) {
  const frameworks = ProjectsService.getProjectFrameworks(projectId)

  return frameworks
}