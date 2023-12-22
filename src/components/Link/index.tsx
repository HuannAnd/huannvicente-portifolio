'use client';

import cn from "@/utils/cn";

import { VariantProps, cva } from "class-variance-authority";

const linkVariants = cva(
  "flex justify-between border-l border-l-[#222] first:mt-0 mt-@gap py-[calc(var(--gap-padding)_*_0.275)] uppercase items-center text-@white-300 px-@gap",
  undefined
)

interface Props
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof linkVariants> {
  withArrow?: boolean
}



export default function Link({ className, children, withArrow = false, ...rest }: Props) {
  return (
    <a className={cn(linkVariants({ className }))} {...rest}>
      {children}
      {withArrow ? (
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: "difference" }}>
            <path d="M10.8839 10.8839C11.372 10.3957 11.372 9.60427 10.8839 9.11612L2.92894 1.16116C2.44079 0.673009 1.64933 0.673009 1.16117 1.16116C0.673019 1.64932 0.673019 2.44078 1.16117 2.92893L8.23224 10L1.16117 17.0711C0.673019 17.5592 0.673019 18.3507 1.16117 18.8388C1.64933 19.327 2.44079 19.327 2.92894 18.8388L10.8839 10.8839ZM7.95898 11.25H10V8.75H7.95898L7.95898 11.25Z" fill="white" />
          </g>
        </svg>
      ) : null}
    </a>
  )
}