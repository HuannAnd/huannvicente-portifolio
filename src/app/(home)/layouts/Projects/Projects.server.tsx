import ProjectsServices from '@/services/projects'

import ClientProjects from './Projects.client'

interface Props { }

export default async function ServerProjects({ }: Props) {
  const projects = ProjectsServices.getProjects()

  return (
    <>
      <ClientProjects projects={projects} />
    </>
  )
}