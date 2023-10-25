'use client';

interface FieldTitleProps
  extends React.PropsWithChildren { }

export default function FieldTitle({ children }: FieldTitleProps) {
  return (
    <div className="w-full h-auto">
      <small className="mb-[1.75vw] text-white/50 block uppercase" >{children}</small>
      <hr />
    </div>
  )
}