"use client"

import React, { forwardRef, memo } from 'react';

import { AnimationScope } from 'framer-motion';

import FollowerCircle from './FollowerCircle';
import FollowerIcons from './FollowerIcons';
import FollowerText from './FollowerText';
import FollowerLoading from './FollowerLoading';
import FollowerRoot from './FollowerRoot';
import FollowerContextProvider from './FollowerContextProvider';

import { ICursor } from '../types';

interface NewFollowerContextProps
  extends Omit<ICursor, "state"> { }

function NewFollowerContext({ isLoading, title, icon }: NewFollowerContextProps, ref: React.ForwardedRef<AnimationScope<SVGSVGElement>>) {
  return (
    <FollowerContextProvider icon={icon} isLoading={isLoading} title={title}>
      <FollowerRoot>
        <FollowerText />
        <FollowerCircle ref={ref!} />
        <FollowerIcons icon={icon} />
        <FollowerLoading />
      </FollowerRoot>
    </FollowerContextProvider>
  )
}

export default memo(forwardRef(NewFollowerContext))