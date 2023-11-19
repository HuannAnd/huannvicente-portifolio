import useAsyncService from "@/hooks/useAsyncData";

import GithubService from "@/services/github"


export default function useLanguages(projectId: number) {
  return useAsyncService(
    GithubService,
    "getProjectLanguages",
    projectId
  )
}