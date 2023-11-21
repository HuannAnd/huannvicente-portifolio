import { Suspense } from "react"

import Gallery from "./layouts/Gallery"
import GallerySkeleton from "./layouts/Gallery/Skeleton"
import BackToHome from "./layouts/Suggestion"
import Technologies from "./layouts/Technologies"
import Hero from "./layouts/Hero"
import Philosophy from "./layouts/Philosophy"

import ProjectsService from '@/services/projects'
import GithubService from "@/services/github"


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
  const id = Number(params.id)

  const metadata = await GithubService.getMetadataRepository(id)
  const { author, phrase } = ProjectsService.getProjectPhilosophy(id)

  return (
    <>
      <Hero {...metadata} />
      <Suspense fallback={<GallerySkeleton />}>
        <Gallery />
      </Suspense>
      <Philosophy author={author} phrase={phrase} />
      <BackToHome />
    </>
  )
}