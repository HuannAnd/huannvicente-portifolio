import useProjectId from "./useProjectId"

import ProjectsService from '@/services/projects'

export default function useProjectFrameworks(projectId: number) {
  const frameworks = ProjectsService.getProjectFrameworks(projectId)

  return frameworks
}