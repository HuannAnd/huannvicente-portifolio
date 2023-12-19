'use client';

import { usePathname } from "next/navigation";
import Option from "./Option";

import useWindowViewport from "@/hooks/useWindowViewport";

interface Props { }

const pages = [
  { alias: "works", path: "/" },
]
export default function Options({ }: Props) {
  const windowViewport = useWindowViewport()
  const pathname = usePathname()

  const radius = windowViewport.width <= 768 ? 150 : 200
  const pagesWhereNavigationAvailable = pages.filter(x => x.path === pathname ? null : x)
  const amountOfOptions = pagesWhereNavigationAvailable.length

  return (
    <div
      style={{ width: `${radius}px` }}
      className="absolute top-0 -left-[10px] -translate-x-full aspect-square">
      {pagesWhereNavigationAvailable.length <= 0 ? null : pagesWhereNavigationAvailable.map((x, i) => <Option radius={radius} {...x} key={`Option_${i}`} amountOfVertexes={amountOfOptions} index={i} />)}
    </div>
  )
}