"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getProjects() {
  try {
    await prisma.$connect()

    const projects = await prisma.projects.findMany()
    console.log("projects: ", projects)

    return projects
  } catch (error) {
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

export async function getProjectById(projectId: number) {
  try {
    prisma.$connect()
    
    const project = await prisma.projects.findMany({
      where: {
        project_id: projectId
      }
    })

    return project
  } catch (error) {
    throw error
  } finally {
    prisma.$disconnect()
  }

}