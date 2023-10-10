'use client';


import useLocomotiveScrollRef from './useLocomotiveScrollRef'

interface ContainerScrollProps
  extends React.HTMLAttributes<HTMLDivElement> { }

export default function ContainerScroll({ children, ...props }: ContainerScrollProps) {
  const ref = useLocomotiveScrollRef();
  console.log("useLocomotiveScroll value: ", ref)

  return (
    <div
      data-scroll-container
      ref={ref}
      className="max-w-@content pointer-events-none lg:w-auto h-auto -z-50 sm:w-screen mx-auto mb-8 bg-transparent"
      {...props}
    >
      {children}
    </div>
  )
}