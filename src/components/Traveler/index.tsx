'use client';

import { useLayoutEffect, useState } from "react";

interface TravelerProps
  extends React.PropsWithChildren { }

export default function Traveler({ }: TravelerProps) {
  const [quantityOfSections, setQuantityOfSections] = useState<number | null>(null)

  useLayoutEffect(() => {
    const getQuantityOfSections = () => {
      const sections = document.querySelectorAll("section")

      return sections.length
    }

    setQuantityOfSections(getQuantityOfSections())
  },
    []
  )

  if (!quantityOfSections) return null

  return (
    <div
      className="fixed top-1/2 w-2 z-[1000] right-@gap gap-2 -translate-y-1/2 grid"
      style={{ gridTemplateRows: `repeat(${4}, 1fr)` }}
    >
      {Array.from({ length: quantityOfSections }, (_, i) => <span key={`travel_${i}`} className={`h-10 w-[2px] bg-white ${i > 0 ? "opacity-100" : "opacity-0"}`} />)}
    </div>
  )
}