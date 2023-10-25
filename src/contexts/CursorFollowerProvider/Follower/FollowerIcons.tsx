'use client';

import { ElementType, useEffect, useState } from "react";

import { HomeIcon, ExternalLinkIcon } from '@radix-ui/react-icons'

import useLoading from "./hooks/useLoading";
import useTitle from "./hooks/useTitle";
import useIcon from "./hooks/useIcon";


interface FollowerIconsProps {
  icon: string | null
}

function Arrow() {
  return (
    <svg
      className="absolute z-[104] mix-blend-difference top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" width="24" height="24">
      <path d="M20 11l-9-9-1.41 1.41L16.17 11l-6.59 6.59L11 20l9-9z" fill="white" />
    </svg>
  )
}

function Home() {
  return <HomeIcon className="absolute animate-pulse z-[104] mix-blend-difference top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="white" width={32} height={32} />
}

function ExternalLink() {
  return <ExternalLinkIcon className="absolute animate-pulse z-[104] mix-blend-difference top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="white" width={32} height={32} />
}

type IconType = "arrow" | "home" | "externalLink" | "none";

type IconComponent = {
  [key in IconType]: ElementType | null;
};

const iconComponents: IconComponent = {
  arrow: Arrow,
  home: Home,
  externalLink: ExternalLink,
  none: null,
};

export default function FollowerIcons({ }: FollowerIconsProps) {
  const icon = useIcon();
  const isLoading = useLoading()
  const title = useTitle()

  const Icon = !icon ? null : iconComponents[icon as IconType];

  if (
    isLoading
    || title
    || !Icon
  ) return null

  return <Icon />
}