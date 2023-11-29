import Gallery from "./layouts/Gallery"
import Hero from "./layouts/Hero"
import Quote from "./layouts/Quote"
import Suggestion from "./layouts/Suggestion"
import Technologies from "./layouts/Technologies"

import GithubService from "@/services/github"
import LocomotiveScrollProvider from "@/contexts/LocomotiveScrollProvider"

enum Params {
  ID = "id"
}

export const generateMetadata = ({
  params,
}: {
  params: { [key in Params]: key extends Params.ID ? number : never }
}) => GithubService.getMetadataRepository(params.id)

export default async function RepositoryPage({
  params,
}: {
  params: { [key in Params]: key extends Params.ID ? string : never }
}) {
  const repositoryId = Number(params.id)

  return (
    <LocomotiveScrollProvider>
      <Hero repositoryId={repositoryId} />
      <Gallery repositoryId={repositoryId} />
      <Technologies repositoryId={repositoryId} />
      <Quote repositoryId={repositoryId} />
      <Suggestion repositoryId={repositoryId} />
    </LocomotiveScrollProvider>
  )
}