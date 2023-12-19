'use client';

import { cva, VariantProps } from "class-variance-authority";

import cn from "@/utils/cn";

const buttonVariants = cva(
  "rounded-full flex justify-between items-center @mobileAndTablet:gap-16 border-4 border-[#151515]",
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
      {children}
      
    </button>
  )
}
