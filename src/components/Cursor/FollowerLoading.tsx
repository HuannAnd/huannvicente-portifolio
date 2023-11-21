'use client';

import Load from '@/components/DotsLoading'
import useLoading from './hooks/useLoading';

interface FolowerLoadingProps {
  // isLoading: boolean
}

export default function FolowerLoading({ }: FolowerLoadingProps) {
  const isLoading = useLoading()

  return <Load style={{ opacity: isLoading ? 1 : 0 }} className='scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
}