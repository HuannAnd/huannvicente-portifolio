import useAsyncCatcher from '@/hooks/useAsyncData'

import GithubService from '@/services/github'

import useProjectId from './useProjectId'

export default function useProjectMetadata(projectId: number) {  
  return useAsyncCatcher(
    GithubService,
    "getMetadataRepository",
    projectId
  )
}