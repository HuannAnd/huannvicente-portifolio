import { BaseHttpClient } from './BaseHttpClient'

class GithubHttpClient extends BaseHttpClient {
  constructor() {
    super(process.env.NEXT_GITHUB_API);
  }
}

export default new GithubHttpClient();