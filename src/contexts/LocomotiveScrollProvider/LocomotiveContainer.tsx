'use client';

interface ContainerScrollProps
  extends React.HTMLAttributes<HTMLDivElement> { }

export default function ContainerScroll({ children, ...props }: ContainerScrollProps) {
  // const ref = useLocomotiveScrollRef();
  // console.log("useLocomotiveScroll value: ", ref)

  return (
    <div
      // ref={ref}
      className="w-auto pointer-events-none lg:w-auto h-auto -z-50 sm:w-screen mx-auto mb-8 bg-darkPrimary"
      {...props}
    >
      {children}
    </div>
  )
}