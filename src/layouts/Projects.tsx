"use client";

import Link from "next/link";
import Image from "next/image";

import { ColorazedButton } from "@/components";

import { format } from 'date-fns'

function Project() {
  // const router = useRouter();

  const project = {
    "owner_url": "https://api.github.com/users/octocat",
    "url": "https://api.github.com/projects/1002603",
    "html_url": "https://github.com/users/octocat/projects/1",
    "columns_url": "https://api.github.com/projects/1002603/columns",
    "id": 1002603,
    "node_id": "MDc6UHJvamVjdDEwMDI2MDM=",
    "name": "My Projects",
    "body": "A board to manage my personal projects.",
    "number": 1,
    "state": "open",
    "creator": {
      "login": "octocat",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "created_at": "2011-04-10T20:09:31Z",
    "updated_at": "2014-03-03T18:58:10Z"
  }

  return (
    <article className="col-span-4 bg-white p-10 text-black">
      <div>
        <h2>{project.name}</h2>
        <Image
          className="w-full h-[150px] mb-4 object-contain"
          src="/projects/banner/1.jpg" alt="hello"
          width={100}
          height={30}
        />
        <span>Created:{format(new Date(project.created_at), "LLLL, d 'of' yyyy")}</span>
      </div>
      <p className="mb-8">{project.body}</p>
      <div className="w-full h-auto">
        <ColorazedButton className="float-left"><a href={project.url}>View repository</a></ColorazedButton>
        <ColorazedButton className="float-right"><Link href={`/repository/${project.id}`}>View More</Link></ColorazedButton>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="w-full px-10 py-20 bg-black clip-around text-white shadow-[0_0_0_100vmax_#000]">
      <div className="text-center mb-8">
        <h1 className="font-bold">Projects</h1>
        <p className="text-white/60 ">Sites publicados</p>
      </div>
      <div className="h-auto w-full grid grid-cols-12 gap-x-4">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  )
}