import data from "./data"

import { IProjectData } from './type'


class ProjectsService {
  constructor(
    private projects: IProjectData[] = data
  ) { }
  private getProjectById(projectId: number) {
    return this.projects.find(x => x.id === projectId)!
  }

  public getNextProjectByLastId(projectId: number) {
    let nextIndex = this.projects.findIndex(x => x.id === projectId) + 1
    nextIndex = nextIndex % this.projects.length

    while (this.projects[nextIndex].isInMaintenance) {
      nextIndex = (nextIndex + 1) % this.projects.length
    }

    const nextProject = this.projects[nextIndex]
    return nextProject
  }

  public getWorkInProgressProjects() {
    const projectsInMaintenance = this.projects.filter(x => x.isInMaintenance);
    return projectsInMaintenance
  }

  public getDevelopedProjects() {
    const developedProjects = this.projects.filter(x => !x.isInMaintenance);
    return developedProjects
  }

  public getProjects() {
    return this.projects
  }
}

export default new ProjectsService()