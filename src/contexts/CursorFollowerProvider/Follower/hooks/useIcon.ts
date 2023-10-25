import { useContext } from 'react'

import { FollowerIconContext } from '../FollowerContextProvider'

export default function useIcon() {
  return useContext(FollowerIconContext)
}