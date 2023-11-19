import useAsyncCatcher from '@/hooks/useAsyncData'

import GithubService from '@/services/github'

export default function useMetadata(projectId: number) {
  return useAsyncCatcher(
    GithubService,
    "getMetadataRepository",
    projectId
  )
}