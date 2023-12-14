'use client';

import { cva, VariantProps } from "class-variance-authority";

import cn from "@/utils/cn";

const buttonVariants = cva(
  "rounded-full flex justify-between bg-[#090909] items-center @mobileAndTablet:gap-16 border-4 border-[#151515]",
  {
    variants: {
      variant: {
        normal: "text-white px-5 py-3 text-black",
        cta: "text-white bg-cyan-500 text-[2rem] px-10 py-10 rounded-full font-semibold"
      }
    },
    defaultVariants: {
      variant: "normal"
    }
  }
)

interface ComponentProps
  extends React.HTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

export default function Component({ className, children, variant, ...rest }: ComponentProps) {
  return (
    <button {...rest} className={cn(buttonVariants({ variant, className }))}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style={{ mixBlendMode: "difference" }}>
          <path d="M23.6328 18.8839C24.1209 18.3957 24.1209 17.6043 23.6328 17.1161L15.6778 9.16116C15.1897 8.67301 14.3982 8.67301 13.9101 9.16116C13.4219 9.64932 13.4219 10.4408 13.9101 10.9289L20.9811 18L13.9101 25.0711C13.4219 25.5592 13.4219 26.3507 13.9101 26.8388C14.3982 27.327 15.1897 27.327 15.6778 26.8388L23.6328 18.8839ZM21.231 19.25H22.7489V16.75H21.231V19.25Z" fill="white" />
        </g>
      </svg>
      <p className="text-[14px] text-[#aaa] font-syne font-bold text-left leading-none">
        Discover
        <br />
        <strong className="text-[1.25rem] text-white font-roboto font-semibold uppercase">
          {children}
        </strong>
      </p>
    </button>
  )
}
