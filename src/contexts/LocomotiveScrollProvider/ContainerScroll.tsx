'use client';

import { forwardRef } from "react";

type ContainerScrollProps = React.HTMLAttributes<HTMLDivElement>

function ContainerScroll({ children, ...props }: ContainerScrollProps, ref: React.ForwardedRef<HTMLDivElement>) {
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

export default forwardRef(ContainerScroll)