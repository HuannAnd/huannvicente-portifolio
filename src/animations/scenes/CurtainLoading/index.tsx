'use client';

import { motion, AnimationControls } from 'framer-motion'

import { usePathname, useRouter } from 'next/navigation'

import { slideUp, } from './anim'

interface CurtainProps extends React.PropsWithChildren { controls: AnimationControls }

export default function Curtain({ children, controls }: CurtainProps) {
  return (
    <motion.div variants={slideUp} className='fixed w-screen h-screen bg-white z-[100]' animate={controls} transition={{ duration: 1 }}>
      <h1>Redirecionando  </h1>
    </motion.div>
  )
}   