"use server"

import fs from 'fs/promises'

export async function getProjectsImages(projectId: number) {
  let staticDirectoryPathname = `./public/projects/${projectId}/images`
  if (process.env.VERCEL_URL) {
    staticDirectoryPathname = `https://${process.env.VERCEL_URL}/projects/${projectId}/images`
  }

  let images = await fs.readdir(staticDirectoryPathname)
  images = images.map(x => `/projects/${projectId}/images/${x}`)

  return images
}

export async function getProjectVideos(projectId: number) {
  let staticDirectoryPathname = `./public/projects/${projectId}/videos`
  if (process.env.VERCEL_URL) {
    staticDirectoryPathname = `https://${process.env.VERCEL_URL}/projects/${projectId}/videos`
  }

  let videos = await fs.readdir(staticDirectoryPathname)
  videos = videos.map(x => `/projects/${projectId}/videos/${x}`)

  return videos
}

export async function getProjectPoster(projectId: number) {
  return `/projects/${projectId}/poster.png`
}
