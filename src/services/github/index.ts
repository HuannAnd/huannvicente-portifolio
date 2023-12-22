import GithubHttpClient from "@/services/client/GithubHttpClient";

import GitHubTypes from './types'

class GithubServiceHttpClient {
  constructor(private token: string) { }

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
  
  public async getRepositoryCreationDate(repositoryId: number) {
    const creationDate = (await this.getRepositoryById(repositoryId)).created_at

    return creationDate
  } 

  public async getMetadataRepository(repositoryId: number): Promise<{ title: string, description: string }> {
    try {
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