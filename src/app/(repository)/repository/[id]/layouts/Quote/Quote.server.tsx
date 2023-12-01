import ProjectsService from '@/services/projects'

import ClientQuote from './Quote.client'

interface Props {
  repositoryId: number
}

export default function ServerQuote({ repositoryId }: Props) {
  const { author, phrase } = ProjectsService.getProjectPhilosophy(repositoryId)

  return (
    <ClientQuote author={author} phrase={phrase} />
  )
}