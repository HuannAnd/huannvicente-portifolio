import ProjectsService from "@/services/projects"

import fs from 'fs'
import path from "path"

interface Props {
  repositoryId: number
}


export default async function ServerContact({ }: Props) {
  const socialsMedias = [
    { name: "Linkedin", imageURL: "/linkedin-poster.png" },
    { name: "Instagram", imageURL: "" },
    { name: "Facebook", imageURL: "" }
  ]


  return (
    <>
      { }
    </>
  )
}