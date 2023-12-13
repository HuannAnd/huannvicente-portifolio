import { TProjectsBody } from "./type";

export default [
  {
    name: "Warren",
    id: 599657419,
    frameworks: ["React", "Styled-Components", "Firebase"],
    filosophy: {
      phrase: "Geometry allows us to explore and comprehend the fundamental properties of space, revealing the underlying beauty and order in our universe.. ",
      author: "Henri Poincaré"
    },
    gallery: [
      { path: "599657419/1", isMobile: false, isVideo: false },
      { path: "599657419/2", isMobile: false, isVideo: false },
      { path: "599657419/3", isMobile: true, isVideo: true }
    ],
    isInMaintenance: false,
    has_domain: true,
    repository_url: "https://github.com/HuannAnd/warren-challange/tree/main",
    domain_url: ""
  }
] as TProjectsBody