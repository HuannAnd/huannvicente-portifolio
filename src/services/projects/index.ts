import { TProjectsBody } from "./type";

export default [
  {
    id: 599657419,
    frameworks: ["React", "Styled-Componets", "Firebase"],
    filosophy: {
      phrase: "Geometry allows us to explore and comprehend the fundamental properties of space, revealing the underlying beauty and order in our universe.. ",
      author: "Henri Poincaré"
    },
    gallery: [
      {
        strategy: "mixed",
        content: [
          {
            title: "Desktop Design",
            url: "599657419/1",
            isMobile: true,
            isMP4: false,
          },
          {
            title: "Mobile Design",
            url: "599657419/2",
            isMobile: false,
            isMP4: false,
          }
        ]
      },
      {
        strategy: "desktop",
        content: [
          {
            title: "Loading Screen",
            url: "599657419/3",
            isMobile: false,
            isMP4: true
          }
        ]
      }
    ]
  },
  {
    id: 617670848,
    frameworks: ["React", "Firebase"],
    filosophy: {
      phrase: "some phrase",
      author: "René Descartes"
    },
    hasDomain: false,
    repository_url: "https://github.com/HuannAnd/warren-challange/tree/master",
    gallery: [
      {
        strategy: "desktop",
        content: [
          {
            url: "617668310/1",
            isMobile: false,
            isMP4: true,
            title: "Open Animation"
          },

        ]
      },
      {
        strategy: "desktop",
        content: [
          {
            url: "617668310/2",
            isMobile: false,
            isMP4: true,
            title: "Page Overview"
          } 
        ]
      },
      {
        strategy: "desktop",
        content: [
          {
            url: "617668310/3",
            isMobile: false,
            isMP4: false,
            title: "Random Plant"
          }
        ]
      }
    ]
  },
  {
    id: 624459441,
    frameworks: ["Next.js", "Tailwind", "MongoDb", "Node"],
    filosophy: {
      phrase: "Eureka!",
      author: "Archimedes of Syracuse"
    },
    hasDomain: true,
    domain_url: "#",
    repository_url: "https://github.com/HuannAnd/Mercantte/tree/master",
    gallery: [
      {
        strategy: "desktop",
        content: [
          {
            url: "624459441/3",
            isMobile: false,
            isMP4: false,
            title: "Random Plant"
          },
          {
            url: "624459441/1",
            isMobile: false,
            isMP4: false,
            title: "Open Animation"
          },

        ]
      },
      {
        strategy: "desktop",
        content: [
          ,
          {
            url: "624459441/2",
            isMobile: false,
            isMP4: true,
            title: "Page Overview"
          }
        ]
      }
    ]
  },
  {
    id: 12998282,
    frameworks: ["Next.js", "MongoDb", "Tailwind"],
    filosophy: {
      phrase: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
      author: "Henri Poincaré"
    },
    hasDomain: true,
    repository_url: "",
    domain_url: "#",
    gallery: [
      {
        strategy: "mixed",
        content: [
          {
            url: "12998282/1",
            isMobile: false,
            isMP4: true,
            title: "Open Animation"
          },
          {
            url: "12998282/2",
            isMobile: true,
            isMP4: false,
            title: "Mobile Design"
          }
        ]
      },
      {
        strategy: "mobile",
        content: [
          {
            url: "12998282/3",
            title: "Contact Design",
            isMobile: true,
            isMP4: false
          }
        ]
      }
    ]
  },
] as TProjectsBody

