import GithubHttpClient from "@/services/client/GithubHttpClient";

import GitHubTypes from './types'

class GithubServiceHttpClient {
  constructor(private token: string) { }

  public async getUser(): Promise<GitHubTypes.GithubUserBody | undefined> {
    try {
      const userName = process.env.NEXT_PUBLIC_GITHUB_PROFILE
      const auth = GithubHttpClient.createAuthHeader(this.token)
      const data = await GithubHttpClient.get<GitHubTypes.GithubUserBody>(`/users/${userName}`, auth);

      return data;
    } catch (error) {
      const err = error as Error;

      console.error(err.message);
      throw new Error("Failed to fetch user from GitHub")
    }
  }
  public async getRepositoryById(repositoryId: number) {
    try {
      console.log("token inside GithubServices methods: ", this.token)
      const auth = GithubHttpClient.createAuthHeader(this.token)
      const repoDetails = await GithubHttpClient.get<GitHubTypes.GithubRepoBody>(`/repositories/${repositoryId}`, auth);

      return repoDetails
    } catch (error) {
      console.error('Erro ao obter os detalhes do repositório:', error);
      throw error
    }
  };
  public async getRepositories(): Promise<GitHubTypes.GithubUserReposBody> {
    try {
      console.log("token inside GithubServices methods: ", this.token)
      const username = process.env.NEXT_PUBLIC_GITHUB_PROFILE
      const auth = GithubHttpClient.createAuthHeader(this.token)

      const repos = await GithubHttpClient.get<GitHubTypes.GithubUserReposBody>(`/users/${username}/repos`, auth)

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
      const auth = GithubHttpClient.createAuthHeader(this.token)

      const res = await GithubHttpClient.get<GitHubTypes.GithubContentBody>(`/repos/${username}/${repository}/contents/README.md`, auth)
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
    console.log("token inside GithubServices methods: ", this.token)
    const auth = GithubHttpClient.createAuthHeader(this.token)

    const languages = await GithubHttpClient.get<GitHubTypes.GithubLanguagesBody>(`/repositories/${repositoryId}/languages`, auth)
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
  public async getMetadataRepository(repositoryId: number): Promise<{ title: string, description: string }> {
    try {
      console.log("token inside GithubServices methods: ", this.token)
      const repository = await this.getRepositoryById(repositoryId)

      if (!repository) throw new Error

      return {
        title: repository.name,
        description: repository.description
      }

    } catch (error) {
      return {
        title: "Not found",
        description: "Ocurred an error, please wait try again later"
      }
    }
  }
}

export default new GithubServiceHttpClient(process.env.NEXT_PUBLIC_GITHUB_API_TOKEN)