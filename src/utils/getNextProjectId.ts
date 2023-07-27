export default function getNextProjectId(projects: any[], id: number): number {
  let nextIndex = projects.findIndex(x => x === id) + 1
  console.log("Next index: ", nextIndex);
  nextIndex = nextIndex % projects.length

  const nextProjectId = projects[nextIndex]
  console.log("Next Project id: ", nextProjectId);


  return nextProjectId
}