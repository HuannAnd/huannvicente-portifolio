'use client';

import { HTMLAttributes } from "react";

type LoadingProps = HTMLAttributes<HTMLDivElement>

export default function Loading(props: LoadingProps) {
  return (
    <div {...props}>
      <svg className="absolute">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur>
          <feColorMatrix values="
                        1 0 0 0 0 
                        0 1 0 0 0 
                        0 0 1 0 0
                        0 0 0 20 -10 
                "></feColorMatrix>
        </filter>
      </svg>
      <div className="loader relative w-[9vw] aspect-square [filter:_url(#gooey)]">
        {Array.from(
          { length: 9 },
          (_, i) => (
            <span
              key={i}
              className="absolute top-0 left-0 w-full h-full block animate-pulse
               before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[16%] before:aspect-square before:bg-white before:rounded-full before:shadow-[0_0_30px_#bbb]"
              style={{ transform: `rotate(${40 * i}deg)`, animationDelay: `${-0.2 * i}s` }}
            ></span>
          )
        )}
      </div>
    </div>
  )
}