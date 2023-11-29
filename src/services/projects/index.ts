import data from "./data"

import { IProjectData } from './type'


class ProjectsService {
  constructor(
    private projects: IProjectData[] = data
  ) { }
  public static async getRepositoryPhotosById(projectId: number) {
    // const assetsManager = new AssetsManager(`/projects/${projectId}`)
    // const photos = await assetsManager.getPhotos()
    // return photos
  }

  public async getRepositoryGLTFAssetById(projectId: number) {
    // const assetsManager = new AssetsManager(`/projects/${projectId}`)

    // const gltfModelPathname = (await assetsManager.getGLTFModels())[0]

    // return gltfModelPathname
  }
  public async getRepositoryVideosById(projectId: number) {
    // const assetsManager = new AssetsManager(`/projects/${projectId}`)

    // const videos = await assetsManager.getPhotos()
    // return videos
  }

  public getProjectFrameworks(projectId: number) {
    const project = this.getProjectById(projectId)

    return project.frameworks
  }

  public isInProduction(projectId: number) {
    const project = this.getProjectById(projectId)
    console.log("Project: ", project)

    if (!("hasDomain" in Object.keys(project))) return false
    return project.hasDomain
  }
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
    const projectsInMaintance = this.projects.filter(x => x.isInMaintenance);
    return projectsInMaintance
  }

  public getDevelopedProjects() {
    const developedProjects = this.projects.filter(x => !x.isInMaintenance);
    return developedProjects
  }

  public getProjects() {
    return this.projects
  }

  public getProjectPhilosophy(projectId: number) {
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