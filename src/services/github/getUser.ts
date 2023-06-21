import GithubHttpClient from '../client/GithubHttpClient';

import { GithubUserBody } from '@/@types/github';

export default async function getUser(userName: string) {
  try {
    const data = await GithubHttpClient.get<GithubUserBody>(`/users/${userName}`);

    return data;
  } catch (error) {
    const err = error as Error;

    console.error(err.message);
  }
}