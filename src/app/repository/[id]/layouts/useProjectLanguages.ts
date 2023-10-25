import useAsyncService from "@/hooks/useAsyncData";

import GithubService from "@/services/github"

import useProjectId from "./useProjectId";

export default function useProjectLanguages(projectId: number) {
  return useAsyncService(
    GithubService,
    "getProjectLanguages",
    projectId
  )
}