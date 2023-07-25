import GithubHttpClient from "@/services/client/GithubHttpClient";

import GithubApi, * as GITHUB from "@/@types/github";

class GithubServiceHttpClient {
  public async getUser(): Promise<GITHUB.GithubUserBody | undefined> {
    try {
      const userName = process.env.NEXT_PUBLIC_GITHUB_PROFILE
      const auth = GithubHttpClient.createAuthHeader(process.env.NEXT_PUBLIC_GITHUB_API_KEY)
      const data = await GithubHttpClient.get<GITHUB.GithubUserBody>(`/users/${userName}`, auth);

      return data;
    } catch (error) {
      const err = error as Error;

      console.error(err.message);
      throw new Error("Failed to fetch user from GitHub")
    }
  }

  public async getRepositoryById(repositoryId: number) {
    try {
      const auth = GithubHttpClient.createAuthHeader(process.env.NEXT_PUBLIC_GITHUB_API_KEY)
      const repoDetails = await GithubHttpClient.get<GithubApi.GithubRepoBody>(`/repositories/${repositoryId}`, auth);

      console.log(repoDetails);
      return repoDetails
    } catch (error) {
      console.error('Erro ao obter os detalhes do repositório:', error);
      throw error
    }
  };

  public async getRepositories(): Promise<GITHUB.GithubUserReposBody> {
    try {
      const username = process.env.NEXT_PUBLIC_GITHUB_PROFILE
      const auth = GithubHttpClient.createAuthHeader(process.env.NEXT_PUBLIC_GITHUB_API_KEY)

      const repos = await GithubHttpClient.get<GITHUB.GithubUserReposBody>(`/users/${username}/repos`, auth)

      return repos
    } catch (error) {
      const err = error as Error

      console.error(err.message)
      throw new Error("Failed to fetch user repos from GitHub")
    }
  }

  public async getProjectREADME(repository: string): Promise<string | undefined> {
    try {
      const username = process.env.NEXT_PUBLIC_GITHUB_PROFILE
      const auth = GithubHttpClient.createAuthHeader(process.env.NEXT_PUBLIC_GITHUB_API_KEY)

      const res = await GithubHttpClient.get<GITHUB.GithubContentBody>(`/repos/${username}/${repository}/contents/README.md`, auth)
      const readMe = Buffer.from(res.content, "base64").toString("utf-8")

      console.log("Readme in string: " + readMe)

      return readMe
    } catch (error) {
      const err = error as Error

      console.error(err.message)
      throw new Error("Failed to fetch README.md content from GitHub")
    }
  }

  public async getProjectLanguages(repositoryId: number): Promise<{ language: string, percentage: number }[]> {
    const auth = GithubHttpClient.createAuthHeader(process.env.NEXT_PUBLIC_GITHUB_API_KEY)

    const languages = await GithubHttpClient.get<GITHUB.GithubLanguagesBody>(`/repositories/${repositoryId}/languages`, auth)
    const mapLangs = new Map(Object.entries(languages))

    const quantitieOfCharsInRepo = Array.from(mapLangs).reduce((total, [_, value]) => total + value, 0)

    const frameworkData: { language: string, percentage: number }[] = [];

    mapLangs.forEach((value, key) => {
      let percentage = (value / quantitieOfCharsInRepo) * 100
      percentage = eval(Number(percentage).toFixed(2)) as number

      frameworkData.push({ language: key, percentage });
    })

    return frameworkData
  }

}

export default new GithubServiceHttpClient();