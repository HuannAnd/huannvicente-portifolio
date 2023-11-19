import { useParams } from "next/navigation";

export default function useId() {
  const projectId = Number(useParams().id)

  return projectId
}