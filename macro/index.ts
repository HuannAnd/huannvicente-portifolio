import * as fsp from "fs/promises"

import GithubService from "./GithubService"
import { create } from "domain";

console.log("Macro has initialized")

async function createJSONFileToProjectFolder({ id, name, created_at }: { id: number, name: string, created_at: string }) {
  const baseJSONContent = JSON.stringify({ id, name, created_at });

  try {
    await fsp.writeFile(`./public/projects/${id}/data.json`, baseJSONContent);
    console.log(`Created data.json for project with ID ${id}`);
  } catch (error) {
    console.error(`Error creating data.json for project with ID ${id}:`, error);
    throw error
  }

}

async function createVideosFolderById(repositoryId: number) {
  const destination = `./public/projects/${repositoryId}`
  const newFolderPath = `${destination}/videos`;

  try {
    await fsp.mkdir(newFolderPath);

    console.log(`Created videos folder for project with ID ${repositoryId}`);
  } catch (error) {
    console.error(`Error creating videos folder for project with ID ${repositoryId}:`, error);
  }
}

async function createImagesFolderById(repositoryId: number) {
  const destination = `./public/projects/${repositoryId}`
  const newFolderPath = `${destination}/images`;

  try {
    await fsp.mkdir(newFolderPath);

    console.log(`Created videos folder for project with ID ${repositoryId}`);
  } catch (error) {
    console.error(`Error creating images folder for project with ID ${repositoryId}:`, error);
  }
}

async function createProjectFolderById(projectId: number) {
  const destination = "./public/projects"
  const newFolderPath = `${destination}/${projectId}`;

  try {
    await fsp.mkdir(newFolderPath);

    console.log(`Created folder for project with ID ${projectId}`);
  } catch (error) {
    console.error(`Error creating folder for project with ID ${projectId}:`, error);
  }
}

const make = async () => {
  try {
    const githubRepositories = await GithubService.getRepositories()
    console.log("Github repositories ids: ", githubRepositories.map((x: { id: string }) => x.id))

    const publicProjectsPathname = "./public/projects"
    const publicProjectsIDs = await fsp.readdir(publicProjectsPathname)
    console.log("./public/projects content: ", publicProjectsIDs)

    const newRepositories = githubRepositories.filter((x: { id: number }) => !publicProjectsIDs.includes(String(x.id))) as { id: number }[]
    console.log("New repositories will be added", newRepositories)
    for (const repository of newRepositories) {
      const project = githubRepositories.find((x: { id: number }) => x.id === repository.id)

      await createProjectFolderById(repository.id)
      await createVideosFolderById(repository.id)
      await createImagesFolderById(repository.id)
      await createJSONFileToProjectFolder(project)
    }

    console.log("Projects Folders created with success")
  } catch (error) {
    throw error
  }

}

make()
