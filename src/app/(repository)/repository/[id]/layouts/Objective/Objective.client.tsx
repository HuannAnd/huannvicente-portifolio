'use client';

import { useLayoutEffect, useRef } from "react";

import LettersSlideInOnView from "@/components/LettersSlideInOnView";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import useWindowViewport from "@/hooks/useWindowViewport";
import TextFadeInOnView from "@/components/TextFadeInOnView";
import SmoothScaleInOnView from "@/components/SmoothScaleInOnView";

interface Props {
  videos: string[]
}

export default function ClientObjective({ videos }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section id="objective" data-name="Objetive" ref={ref} className="w-screen px-@section py-[9vw]">
      <div className="@desktop:grid @mobileAndTablet:flex-col @desktop:grid-cols-6 items-start @mobileAndTablet:gap-2 gap-4">
        <h5 className="uppercase block tracking-tighter text-[#aaa] text-[1rem]">Creation</h5>
        <TextFadeInOnView className="@desktop:col-span-2" trigger="#objective">
          <p className="inline-block @mobileAndTablet:pt-@gap @desktop:col-span-3 text-white @mobileAndTablet:text-[1.25rem] leading-[150%]">
            EduLink is not just an educational platform; it&apos;s a movement towards accessible, innovative learning. We believe in breaking down barriers to education, making learning an inclusive experience for all. Our mission is twofold: first, to redefine education by leveraging technology to create engaging and effective learning tools, and second, to build a global community of learners and educators.
          </p>
        </TextFadeInOnView>
      </div>
      <SmoothScaleInOnView trigger="#objective">
        {videos.map(x => (
          <video
            autoPlay
            loop
            muted
            className="pt-@container @desktop:h-[80vmin] @mobileAndTablet:w-full scale-[.9] mx-auto"
            src={x}
          />
        ))}
      </SmoothScaleInOnView>
    </section>
  )
}