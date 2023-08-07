'use client';

import { forwardRef } from "react";

type ContainerScrollProps = React.HTMLAttributes<HTMLDivElement>

function ContainerScroll({ children, ...props }: ContainerScrollProps, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <div
      data-scroll-container
      ref={ref}
      className="max-w-[1440px] pointer-events-none min-w-[648px] h-auto mx-auto mb-8 bg-transparent"
      {...props}
    >
      {children}
    </div>
  )
}

export default forwardRef(ContainerScroll)