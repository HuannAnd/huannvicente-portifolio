'use client';

// import { useLocomotiveScroll } from "react-locomotive-scroll";

import useLocomotiveScrollRef from './useLocomotiveScrollRef'

interface ContainerScrollProps
  extends React.HTMLAttributes<HTMLDivElement> { }

export default function ContainerScroll({ children, ...props }: ContainerScrollProps) {
  const ref = useLocomotiveScrollRef();
  console.log("useLocomotiveScroll value: ", ref)

  // if (!ref) return null

  return (
    <div
      data-scroll-container
      ref={ref}
      className="max-w-[1440px] pointer-events-none lg:w-auto h-auto sm:w-screen mx-auto mb-8 bg-transparent"
      {...props}
    >
      {children}
    </div>
  )
}