import * as ProjectsServices from '@/app/ProjectRepository'

import ClientProjects from './Projects.client'

interface Props { }

export default async function ServerProjects(props: Props) {
  const projects = await ProjectsServices.getProjects()
  console.log("Props of Server Component Projects: ", props)

  return (
    <>
      <ClientProjects projects={projects} />
    </>
  )
}