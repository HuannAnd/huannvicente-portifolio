'use client';

import projects from '@/services/projects';

import { createContext, memo, useEffect, useState } from 'react'

interface ProjectsProviderProps {
  children: React.ReactNode
}

type Value = number[]

export const ProjectsContext = createContext({} as Value)

function ProjectsProvider({ children }: ProjectsProviderProps) {
  const [projectsIds] = useState(projects.map(x => x.id))
  console.log("ProjectsIds: ", projectsIds);

  useEffect(() => console.log("useState render again"), [projectsIds])

  return (
    <ProjectsContext.Provider value={projectsIds}>
      {children}
    </ProjectsContext.Provider>
  )
}

export default memo(ProjectsProvider)