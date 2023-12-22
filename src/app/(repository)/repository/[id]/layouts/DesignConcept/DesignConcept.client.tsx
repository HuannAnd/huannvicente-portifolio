'use client';

import TextFadeInOnView from "@/components/TextFadeInOnView";
import SmoothScaleInOnView from "@/components/SmoothScaleInOnView";
import ImageMockup from "./ImageMockup";

interface Props
  extends React.PropsWithChildren {
  images: string[]
}

export default function ClientDesignConcept({ images, children }: Props) {
  return (
    <section
      className="w-screen min-h-screen h-auto px-@section gap-@gap py-[9vw] @desktop:grid @desktop:grid-cols-6"
      id="design-concept"
      data-name="Design Concept"
    >
      <h5 className="uppercase block tracking-tighter text-[1rem] text-@white-300">Design Concept</h5>
      <TextFadeInOnView className="@desktop:col-span-2 mix-blend-difference" trigger="#design-concept">
        <p className="@mobileAndTablet:pt-@gap @desktop:col-end-[-1] @desktop:col-span-3">
          {children}
        </p>
      </TextFadeInOnView>
      <div className="min-h-[55vmin] gap-@gap pt-@container @desktop:col-span-4 @desktopAndTablet:col-start-2 @mobile:flex @mobile:flex-col @desktopAndTablet:grid @desktopAndTablet:grid-cols-2">
        {images.map((x, i) => (
          <SmoothScaleInOnView key={`ImageMockup_${i}`} trigger="#design-concept">
            <ImageMockup src={x} alt="" />
          </SmoothScaleInOnView>
        ))}
      </div>
    </section>
  )
}