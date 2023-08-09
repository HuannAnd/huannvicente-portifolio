"use client"

import React, { forwardRef, memo } from 'react';

import { AnimationScope } from 'framer-motion';

import FollowerCircle from './components/FollowerCircle';
import FollowerIcons from './components/FollowerIcons';
import FollowerText from './components/FollowerText';
import FollowerLoading from './components/FollowerLoading';
import FollowerRoot from './components/FollowerRoot';
import FollowerContextProvider from './FollowerContextProvider';


const Follower = {
  Root: FollowerRoot,
  Circle: FollowerCircle,
  Icons: FollowerIcons,
  Text: FollowerText,
  Loading: FollowerLoading
}

interface NewFollowerContextProps {
  isLoading: boolean,
  title: string | null,
  icon: string | null
}

function NewFollowerContext({ isLoading, title, icon }: NewFollowerContextProps, ref: React.ForwardedRef<AnimationScope<SVGSVGElement>>) {
  return (
    <FollowerContextProvider icon={icon} isLoading={isLoading} title={title}>
      <Follower.Root>
        <Follower.Text />
        <Follower.Circle ref={ref!} />
        <Follower.Icons icon={icon} />
        <Follower.Loading />
      </Follower.Root>
    </FollowerContextProvider>
  )
}

export default memo(forwardRef(NewFollowerContext))