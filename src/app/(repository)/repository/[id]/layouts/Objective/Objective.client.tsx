'use client';

import { useRef } from "react";

import TextFadeInOnView from "@/components/TextFadeInOnView";
import SmoothScaleInOnView from "@/components/SmoothScaleInOnView";

interface Props
  extends React.PropsWithChildren {
  videos: string[]
}

export default function ClientObjective({ videos, children }: Props) {
  return (
    <section
      className="w-screen px-@section py-[9vw]"
      id="objective"
      data-name="Objetive"
    >
      <div className="@desktop:grid @mobileAndTablet:flex-col @desktop:grid-cols-6 items-start @mobileAndTablet:gap-2 gap-@gap">
        <h5 className="uppercase block tracking-tighter text-@white-300">Creation</h5>
        <TextFadeInOnView className="@desktop:col-span-2" trigger="#objective">
          <p className="inline-block @mobileAndTablet:pt-@gap @desktop:col-span-3 @desktop:col-end-[-1]">
            {children}
          </p>
        </TextFadeInOnView>
      </div>
      <SmoothScaleInOnView trigger="#objective">
        {videos.map((x, i) => (
          <video
            key={`Video_${i}`}
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