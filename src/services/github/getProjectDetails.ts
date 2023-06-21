import GithubHttpClient from '../client/GithubHttpClient';

export default async function getProjectDetails(projectName: string) {
  try {
    const username = process.env.NEXT_GITHUB_PROFILE;

    if (!username) {
      console.log("Enviroment variable its already null");
      return;
    }

    const project = await GithubHttpClient.get(`/users/${username}/${projectName}`);

    console.log(project);

    return project;
  } catch (error) {
    const err = error as Error;

    console.error(err.message);

  }
}