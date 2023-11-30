import { useEffect, useState } from "react"

import { usePathname } from "next/navigation"

type TSection = {
  name: string,
  id: string
}

export default function useSections() {
  const [sections, setSections] = useState<TSection[]>([])
  const pathname = usePathname()

  function getSections() {
    const sections = document.documentElement.querySelectorAll("section")

    let sectionsOnArray: HTMLElement[] = []
    sections.forEach(section => sectionsOnArray.push(section));

    return sectionsOnArray
  }

  function canBeNavigate(element: HTMLElement) {
    return element.hasAttribute("id") && typeof element.dataset.name !== "undefined"
  }

  useEffect(() => {
    const sectionsElements = getSections()

    const sectionsWithId = sectionsElements.filter(x => canBeNavigate(x))
    const sections = sectionsWithId.map(x => ({ name: x.dataset.name!, id: x.id }))
    setSections(sections)
  }, [pathname])

  console.log("Sections: ", sections)

  return sections
}