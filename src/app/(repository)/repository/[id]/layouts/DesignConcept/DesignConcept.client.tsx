'use client';

import CustomButton from "@/components/CustomButton";
import TextFadeInOnView from "@/components/TextFadeInOnView";
import SmoothScaleInOnView from "@/components/SmoothScaleInOnView";
import ImageMockup from "./ImageMockup";

interface Props { }

export default function ClientDesignConcept({ }: Props) {
  return (
    <section
      className="w-screen min-h-screen h-auto px-@section gap-4 py-[9vw] @desktop:grid @desktop:grid-cols-6"
      id="design-concept"
      data-name="Design Concept"
    >
      <h5 className="uppercase block tracking-tighter text-[1rem] text-[#aaa]">Design Concept</h5>
      <TextFadeInOnView className="@desktop:col-span-2 mix-blend-difference" trigger="#design-concept">
        <p className="text-white @mobileAndTablet:pt-@gap @desktop:col-start-2 @desktop:col-span-3">
          The design concept for EduLink was conceived with a central focus on accessibility, innovation, and community. Inspired by the vision to make education more inclusive, we aimed for an intuitive and user-friendly design to ensure easy and barrier-free access to educational content. We prioritized an inclusive approach, ensuring the design is adaptable to various learning styles and user needs. EduLink&apos;s interface was developed to be accessible to all, regardless of prior technical skills or physical limitations.
        </p>
      </TextFadeInOnView>
      <div className="min-h-[55vmin] gap-2 pt-@container @desktop:col-span-4 @desktopAndTablet:col-start-2 @mobile:flex @mobile:flex-col @desktopAndTablet:grid @desktopAndTablet:grid-cols-2">
        <SmoothScaleInOnView trigger="#design-concept">
          <ImageMockup src="/projects/599657419/poster.png" alt="" />
        </SmoothScaleInOnView>
        <SmoothScaleInOnView scrub={4} trigger="#design-concept">
          <ImageMockup src="/projects/599657419/images/warren-poster3.png" alt="" />
        </SmoothScaleInOnView>
      </div>
    </section>
  )
}