import GithubHttpClient from '../client/GithubHttpClient';

import { GithubContentBody } from '@/@types/github';


export default async function getProjectREADME(repository: string) {
  try {
    const username = process.env.NEXT_GITHUB_PROFILE;

    if (!username) {
      console.log("Enviroment variable its already null");
      return;
    }

    const res = await GithubHttpClient.get<GithubContentBody>(`/repos/${username}/${repository}/contents/README.md`);
    const readMe = Buffer.from(res.content, "base64").toString("utf-8");

    console.log("Readme in string: " + readMe);
    
    return readMe;
  } catch (error) {
    const err = error as Error;

    console.error(err.message);
  }
}