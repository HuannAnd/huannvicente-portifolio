'use client';

interface FieldRootProps
  extends React.PropsWithChildren { }

export default function FieldRoot({ children }: FieldRootProps) {
  return (
    <article className="flex flex-col">{children}</article>
  )
}