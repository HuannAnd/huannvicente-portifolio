import getProjectDetails from "@/services/github/getProjectDetails"


export default async function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params;

  // const data = await getProjectDetails(id)



  return (
    <div className="">
      <h1>Project Overview</h1>
      <h2></h2>
    </div>
  )
}