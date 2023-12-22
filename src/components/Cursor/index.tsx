"use client"

import React from 'react';

import Circle from './Circle';
import FollowerText from './FollowerText';
import FollowerLoading from './FollowerLoading';
import FollowingMotion from './FollowingMotion';

interface Props
  extends React.PropsWithChildren { }


export default function Cursor({ }: Props) {
  return (
    <FollowingMotion
      damping={10}
      stiffness={150}
      mass={.2}
      restDelta={0.001}
    >
      <FollowerText />
      <Circle />
      <FollowerLoading />
    </FollowingMotion >
  )
}