'use client';

interface FieldListenerProps
  extends React.PropsWithChildren { }

export default function FieldListener({ children }: FieldListenerProps) {
  return (
    <ul className="w-full h-auto z-50">{children}</ul>
  )
}