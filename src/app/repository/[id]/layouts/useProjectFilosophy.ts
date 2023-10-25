import useProjectId from "./useProjectId"

import ProjectsService from '@/services/projects'


export default function useProjectFilosophy(projectId: number) {
  const filosophy = ProjectsService.getProjectFilosophy(projectId)

  return filosophy
}