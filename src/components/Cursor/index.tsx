"use client"

import React from 'react';

import FollowerCircle from './FollowerCircle';
// import FollowerIcons from './FollowerIcons';
import FollowerText from './FollowerText';
import FollowerLoading from './FollowerLoading';
import FollowerRoot from './FollowerRoot';
import Slider from './Slider';

interface Props
  extends React.PropsWithChildren { }


export default function Cursor({ }: Props) {
  return (
    <>
      <FollowerRoot
        damping={10}
        stiffness={150}
        mass={.2}
        restDelta={0.001}
      >
        <FollowerText />
        <FollowerCircle />
        <FollowerLoading />
      </FollowerRoot >
      <FollowerRoot
        damping={10}
        stiffness={100}
        mass={.2}
        restDelta={0.001}
      >
        <Slider />
      </FollowerRoot>
    </>
  )
}