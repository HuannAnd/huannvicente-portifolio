import { useMemo } from "react"

import ProjectsService from '@/services/projects'

export default function useNextProjectWithId(projectId: number) {
  const nextProject = useMemo(() => ProjectsService.getNextProjectWithId(projectId), [projectId])

  return nextProject
}