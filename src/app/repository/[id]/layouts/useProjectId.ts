import { useParams } from "next/navigation";

export default function useProjectId() {
  const projectId = Number(useParams().id)
  console.log("ProjectID", projectId)
  
  return projectId
}