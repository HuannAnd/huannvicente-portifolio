import { TProjectsBody } from "./type";

export default [
  {
    name: "Warren",
    id: 599657419,
    frameworks: ["React", "Styled-Componets", "Firebase"],
    filosophy: {
      phrase: "Geometry allows us to explore and comprehend the fundamental properties of space, revealing the underlying beauty and order in our universe.. ",
      author: "Henri Poincaré"
    },
    gallery: [
      { path: "599657419/1", isMobile: false, isVideo: false },
      { path: "599657419/2", isMobile: false, isVideo: false },
      { path: "599657419/3", isMobile: true, isVideo: true }
    ]
  },
  {
    name: "Letmeask",
    id: 617670848,
    frameworks: ["React", "Firebase"],
    filosophy: {
      phrase: "some phrase",
      author: "René Descartes"
    },
    hasDomain: false,
    repository_url: "https://github.com/HuannAnd/warren-challange/tree/master",
    gallery: [
      { path: "617668310/1", isMobile: false, isVideo: true },
      { path: "617668310/2", isMobile: false, isVideo: true },
      { path: "617668310/3", isMobile: false, isVideo: false },
    ]
  },
  {
    id: 624459441,
    name: "Mercantte",
    frameworks: ["Next.js", "Tailwind", "MongoDb", "Node"],
    filosophy: {
      phrase: "Eureka!",
      author: "Archimedes of Syracuse"
    },
    hasDomain: true,
    domain_url: "#",
    repository_url: "https://github.com/HuannAnd/Mercantte/tree/master",
    gallery: [
      { path: "624459441/1", isMobile: false, isVideo: false },
      { path: "624459441/2", isMobile: false, isVideo: true },
      { path: "624459441/3", isMobile: false, isVideo: false },
    ]
  },
  {
    id: 12998282,
    name: "Portifolio",
    frameworks: ["Next.js", "MongoDb", "Tailwind"],
    filosophy: {
      phrase: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
      author: "Henri Poincaré"
    },
    hasDomain: true,
    repository_url: "",
    domain_url: "#",
    gallery: [

    ]
  },
] as TProjectsBody

