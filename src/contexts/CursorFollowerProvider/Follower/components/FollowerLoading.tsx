'use client';

import Load from '@/components/Load'
import useLoading from '../hooks/useLoading';

interface FolowerLoadingProps {
  // isLoading: boolean
}

export default function FolowerLoading({ }: FolowerLoadingProps) {
  console.log("FolowerLoading has render")
  const isLoading = useLoading()

  // console.log("IsLoading inside FolowerLoading: ", isLoading)

  // if (isLoading) return null
  return <Load style={{ opacity: isLoading ? 1 : 0 }} className='scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
}