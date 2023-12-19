'use client';

import CustomButton from "@/components/CustomButton";
import TextFadeInOnView from "@/components/TextFadeInOnView";
import SmoothScaleInOnView from "@/components/SmoothScaleInOnView";
import ImageMockup from "./ImageMockup";

interface Props {
  images: string[]
}

export default function ClientDesignConcept({ images }: Props) {
  return (
    <section
      className="w-screen min-h-screen h-auto px-@section gap-4 py-[9vw] @desktop:grid @desktop:grid-cols-6"
      id="design-concept"
      data-name="Design Concept"
    >
      <h5 className="uppercase block tracking-tighter text-[1rem] text-@white-200">Design Concept</h5>
      <TextFadeInOnView className="@desktop:col-span-2 mix-blend-difference" trigger="#design-concept">
        <p className="text-@white-300 @mobileAndTablet:pt-@gap @desktop:col-start-2 @desktop:col-span-3">
          The design concept for EduLink was conceived with a central focus on accessibility, innovation, and community. Inspired by the vision to make education more inclusive, we aimed for an intuitive and user-friendly design to ensure easy and barrier-free access to educational content. We prioritized an inclusive approach, ensuring the design is adaptable to various learning styles and user needs. EduLink&apos;s interface was developed to be accessible to all, regardless of prior technical skills or physical limitations.
        </p>
      </TextFadeInOnView>
      <div className="min-h-[55vmin] gap-2 pt-@container @desktop:col-span-4 @desktopAndTablet:col-start-2 @mobile:flex @mobile:flex-col @desktopAndTablet:grid @desktopAndTablet:grid-cols-2">
        {images.map((x, i) => (
          <SmoothScaleInOnView key={`ImageMockup_${i}`} trigger="#design-concept">
            <ImageMockup src={x} alt="" />
          </SmoothScaleInOnView>
        ))}
      </div>
    </section>
  )
}