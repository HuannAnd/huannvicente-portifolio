'use client';

import projects from '@/services/projects';
import getNextProjectId from '@/utils/getNextProjectId';
import { usePathname } from 'next/navigation';

import { createContext, useEffect, useMemo, useState } from 'react'

interface ProjectsProviderProps {
  children: React.ReactNode
}

type Value = number[]


export const ProjectsContext = createContext({} as Value)

export default function ProjectsProvider({ children }: ProjectsProviderProps) {
  const [projectsIds] = useState(projects.map(x => x.id))
  console.log("ProjectsIds: ", projectsIds);

  useEffect(() => console.log("useState render"), [projectsIds])

  return (
    <ProjectsContext.Provider value={projectsIds}>
      {children}
    </ProjectsContext.Provider>
  )
}