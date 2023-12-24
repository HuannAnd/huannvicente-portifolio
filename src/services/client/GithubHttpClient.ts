import { BaseHttpClient } from './BaseHttpCLient'

class GithubHttpClient extends BaseHttpClient {
  constructor() {
    super("https://api.github.com");
  }
}

export default new GithubHttpClient();