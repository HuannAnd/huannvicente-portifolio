'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className='w-screen h-screen grid place-content-center'>
      <h1 className='text-white text-[7rem] text-center'>Something was Wrong</h1>
    </section>
  )
}