
import Hero from "./layouts/Hero"
import Suggestion from "./layouts/Suggestion"
import Objective from "./layouts/Objective"
import DesignConcept from "./layouts/DesignConcept"

import GithubService from "@/services/github"

import Hamburger from "@/components/Hamburger"

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
      <Hamburger />
      <Hero repositoryId={repositoryId} />
      <Objective repositoryId={repositoryId} />
      <DesignConcept repositoryId={repositoryId} />
      <Suggestion repositoryId={repositoryId} />
    </LocomotiveScrollProvider>
  )
}