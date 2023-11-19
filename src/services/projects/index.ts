import data from "./data";

import { IProjectData } from './type'

class ProjectsService {
  constructor(
    private projects: IProjectData[] = data
  ) { }
  public getProjectPhotosById(projectId: number) {
    const project = this.getProjectById(projectId)

    return project?.gallery
  }
  public getProjectFrameworks(projectId: number) {
    const project = this.getProjectById(projectId)

    return project.frameworks
  }

  public projectHasDomain(projectId: number) {
    const project = this.getProjectById(projectId)
    console.log("Project: ", project)

    if (!("hasDomain" in Object.keys(project))) return false
    return project.hasDomain
  }
  private getProjectById(projectId: number) {
    return this.projects.find(x => x.id === projectId)!
  }

  public getNextProjectWithId(projectId: number) {
    let nextIndex = this.projects.findIndex(x => x.id === projectId) + 1
    nextIndex = nextIndex % this.projects.length

    while (this.projects[nextIndex].isInMaintenance) {
      nextIndex = (nextIndex + 1) % this.projects.length
    }

    const nextProject = this.projects[nextIndex]
    return nextProject
  }

  public getProjectsInMainantance() {
    const projectsInMaintance = this.projects.filter(x => x.isInMaintenance);
    return projectsInMaintance
  }

  public getDevelopedProjects() {
    const developedProjects = this.projects.filter(x => !x.isInMaintenance);
    return developedProjects
  }

  public getProjectFilosophy(projectId: number) {
    const project = this.getProjectById(projectId)

    return project.filosophy
  }

  public getProjectUrls(projectId: number) {
    const project = this.getProjectById(projectId)!

    return {
      "domain_url": project.domain_url,
      "github_repository_url": project.repository_url
    }
  }
}

export default new ProjectsService()