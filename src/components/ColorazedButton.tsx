"use client";

import useHSLAPositioner from "@/hooks/useHSLAPositioner";
import { useRef, memo } from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
}

function Button({ className, children, ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null!);
  const [hue, sat, light] = useHSLAPositioner(ref);


  return (
    <button
      className={`${className} h-auto duration-300 text-stroke-[#000] text-[20px] px-4 py-2 w-auto text-center text-white`}
      ref={ref}
      style={{ backgroundColor: `hsl(${hue}, ${sat}%, ${light}%)` }}
      {...props}

    >{children}</button>
  )
}

export default memo(Button);