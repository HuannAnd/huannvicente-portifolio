
import { IProjectData, TProjectsBody } from "@/services/projects/type";

export default function getNextProjectId(projects: TProjectsBody, id: number): IProjectData {
  let nextIndex = projects.findIndex(x => x.id === id) + 1
  nextIndex = nextIndex % projects.length

  while (projects[nextIndex].isInMaintenance) {
    nextIndex = (nextIndex + 1) % projects.length
  }

  const nextProject = projects[nextIndex]
  console.log("Next Project id: ", nextProject);


  return nextProject
}