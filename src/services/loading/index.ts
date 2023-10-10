import { BaseHttpClient } from "../client/BaseHttpCLient";

class LoadingHttpClient extends BaseHttpClient {
  constructor() {
    super("http://localhost:3000/api")
  }
}