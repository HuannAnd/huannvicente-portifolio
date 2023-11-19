"use client"

import React from 'react';

import FollowerCircle from './FollowerCircle';
import FollowerIcons from './FollowerIcons';
import FollowerText from './FollowerText';
import FollowerLoading from './FollowerLoading';
import FollowerRoot from './FollowerRoot';

interface Props
  extends React.PropsWithChildren { }


export default function Cursor({ }: Props) {
  return (
    <FollowerRoot>
      <FollowerText />
      <FollowerCircle />
      <FollowerIcons />
      <FollowerLoading />
    </FollowerRoot>
  )
}