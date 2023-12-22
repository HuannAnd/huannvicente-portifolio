import GithubHttpClient from "./GithubHttpClient";

import * as dotenv from 'dotenv'
import * as path from "path";

const envPath = path.resolve(__dirname, ".env.local")

dotenv.config({ path: envPath })

export default {
  async getRepositories(): Promise<any> {
    try {
      console.log("GET /user/repositories into GithubService ", process.env.NEXT_PUBLIC_GITHUB_API_TOKEN)
      const username = "HuannAnd"
      const auth = GithubHttpClient.createAuthHeader(process.env.NEXT_PUBLIC_GITHUB_API_TOKEN)

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