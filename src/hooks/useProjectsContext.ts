import { useContext } from "react";

import { ProjectsContext } from "@/contexts/ProjectsProvider";


export default function useProjectsContext() {
  return useContext(ProjectsContext)
}