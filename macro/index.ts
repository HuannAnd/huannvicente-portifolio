import fsp from "fs/promises"

import GithubService from "./GithubService"

console.log("Macro has initialized")

async function createJSONFileToProjectFolder({ id, name, created_at }: { id: string, name: string, created_at: string }) {
  const baseJSONContent = JSON.stringify({ id, name, created_at, })

  await fsp.writeFile(`./public/projects/${id}`, baseJSONContent)
}

async function createProjectFolderById(projectId: string) {
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

    const publicProjectsPathname = "./public/projects"
    const publicProjectsIDs = await fsp.readdir(publicProjectsPathname)

    const newRepositories = githubRepositories.filter((x: { id: string }) => publicProjectsIDs.includes(x.id)) as string[]
    for (const repositoryId of newRepositories) {
      const project = githubRepositories.find((x: { id: string }) => x.id === repositoryId)

      await createProjectFolderById(repositoryId)
      await createJSONFileToProjectFolder(project)

    }
  } catch (error) {

  }

}

