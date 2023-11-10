'use client';

import { Suspense, useEffect, useState } from 'react';

import CustomLoading from '@/three/scenes/Loading'

interface LoadingProps { }

const phrases = [
  "Preparing images",
  "Loading content",
  "Optmizing some titles",
  "Getting Api's Responses",
  "What do you think?",
  "You would like Potatos?",
  "3",
  "2",
  "1",
  ".9",
  "I'm Just Kidding with you",
]

const INTERVAL_DURATION_IN_MS = 3000

export default function Loading({ }: LoadingProps) {
  const [index, setIndex] = useState(0)
  useEffect(() => { 
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % phrases.length
      setIndex(nextIndex)
    }, INTERVAL_DURATION_IN_MS)

    return () => {
      clearInterval(interval)
    }
  }, [index])

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black cursor-wait w-full h-full">
      <Suspense fallback={null}>
        <CustomLoading />
      </Suspense>
      <h5 className='text-center z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50'>
        {phrases[index]}{"..."}
      </h5>
    </div>
  )


}