import GithubService from "@/services/github"

import Gallery from "@/layouts/Gallery";
import BackToHome from "@/layouts/BackToHome";
import Technologies from "@/layouts/Technologies";
import Overview from "@/layouts/Overview";
import Filosophy from "@/layouts/Filosophy";

import projects from '../../../../public/projects.json'


export default async function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const id = eval(params.id);
  const repoDetails = await GithubService.getRepositoryById(id)
  const languages = await GithubService.getProjectFrameworks(id)
  const repo = projects.find(x => x.id === id)!
  const photos = [
    "Mobile",
    "Web page",
    "Loading Screen"
  ].map((x) => ({ title: x, id }))

  return (
    <>
      {/* <main> */}
        <Overview name={repoDetails.name} description={repoDetails.description} />
        <Gallery photos={photos} />
        <Technologies frameworks={repo.frameworks} languages={languages} />
        <Filosophy {...repo.filosophy} />
        <BackToHome />
      {/* </main> */}
      <aside className="fixed mix-blend-difference top-0 right-0 z-10 pointer-events-auto w-[3vw] text-white flex flex-col justify-around gap-[3vw] items-center h-screen">
        <small className="-rotate-90 text-[calc(100vw_*_.006875)] mix-blend-difference cursor-pointer hover:underline hover:opacity-100 font-light">Overview</small>
        <small className="-rotate-90 text-[calc(100vw_*_.006875)] mix-blend-difference font-light">Gallery</small>
        <small className="-rotate-90 text-[calc(100vw_*_.006875)] mix-blend-difference font-light">Technologies</small>
        <small className="-rotate-90 text-[calc(100vw_*_.006875)] mix-blend-difference font-light">Poetry</small>
      </aside>
    </>
  )
}