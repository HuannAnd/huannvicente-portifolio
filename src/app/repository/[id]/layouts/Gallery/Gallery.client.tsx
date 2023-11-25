'use client';

import Snapshot from "./Snapshot";

interface Props
  extends React.PropsWithChildren { }

export default function ClientGallery({ children }: Props) {
  return (
    <section className="w-screen px-@section gap-4 relative h-auto py-[9vw] bg-white grid grid-cols-6 grid-rows-1">
      {children}
    </section>
  )
}