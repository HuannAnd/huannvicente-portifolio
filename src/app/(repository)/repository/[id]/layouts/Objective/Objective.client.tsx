'use client';

import { useLayoutEffect, useRef } from "react";

import LettersSlideInOnView from "@/components/LettersSlideInOnView";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import useWindowViewport from "@/hooks/useWindowViewport";
import TextFadeInOnView from "@/components/TextFadeInOnView";
import SmoothScaleInOnView from "@/components/SmoothScaleInOnView";

interface Props {

}

export default function ClientObjective({ }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section id="objective" data-name="Objetive" ref={ref} className="w-screen min-h-screen px-@section py-[9vw]">
      <LettersSlideInOnView trigger="#objective">
        <h1 className="text-white @mobileAndTablet:text-center mb-32">Prepare to you</h1>
      </LettersSlideInOnView>
      <div className="@mobileAndTablet:flex @mobileAndTablet:mb-16 @mobileAndTablet:flex-col @desktop:mb-32 @desktop:grid @desktop:grid-cols-6 items-start @mobileAndTablet:gap-2 gap-4">
        <strong className="uppercase block tracking-tighter text-[#aaa] text-[1rem]">Creation</strong>
        <TextFadeInOnView className="@desktop:col-span-2" trigger="#objective">
          <p className="inline-block @desktop:col-span-3 text-white @mobileAndTablet:text-[1.25rem] leading-[150%]">
            EduLink is not just an educational platform; it's a movement towards accessible, innovative learning. We believe in breaking down barriers to education, making learning an inclusive experience for all. Our mission is twofold: first, to redefine education by leveraging technology to create engaging and effective learning tools, and second, to build a global community of learners and educators.
          </p>
        </TextFadeInOnView>
      </div>
      <SmoothScaleInOnView trigger="#objective">
        <video
          autoPlay
          loop
          muted
          className="@desktop:rounded-2xl @mobileAndTablet:rounded  @desktop:h-[80vmin] @mobileAndTablet:w-full scale-[.9] mx-auto" src="/projects/599657419/videos/video-loading.mp4"
        />
      </SmoothScaleInOnView>
    </section>
  )
}