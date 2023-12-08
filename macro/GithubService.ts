import GithubHttpClient from "./GithubHttpClient";

const token = "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"

export default {
  async getRepositories(): Promise<any> {
    try {
      console.log("GET /user/repositories into GithubService ", token)
      const username = "HuannAnd"
      const auth = GithubHttpClient.createAuthHeader(token)

      const repos = await GithubHttpClient.get<any>(`/user/repos`, auth)

      console.log("Success to GET user repositories")
      return repos
    } catch (error) {
      const err = error as Error

      console.error(err.message)
      throw new Error("Failed to fetch user repos from GitHub")
    }
  }
}