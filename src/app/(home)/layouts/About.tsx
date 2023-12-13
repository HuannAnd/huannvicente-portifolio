"use client";

import Polygon from '@/components/Polygon';
import LettersSlideInOnView from '@/components/LettersSlideInOnView';
import TextFadeInOnView from '@/components/TextFadeInOnView';
import useWindowViewport from '@/hooks/useWindowViewport';
import CustomButton from '@/components/CustomButton';


export default function About() {
  const windowViewport = useWindowViewport()

  return (
    <section
      id="about"
      data-name="About"
      className="w-auto max-w-[100vw] inline-flex relative flex-col items-start px-@section py-[9vw] mx-auto h-auto bg-transparent text-darkPrimary"
    >
      <div className="w-full grid grid-cols-6 gap-4 mb-[3vw] bg-transparent">
        <strong className='uppercase w-max sticky @desktop:top-0 tracking-tighter @mobileAndTablet:text-[1rem] text-[#aaa] self-start'>About Me</strong>
        <article id="about-me" className="@desktop:col-span-3 sticky @desktop:top-0 self-start @tablet:col-span-3 @desktop:col-start-2 @tablet:col-start-2 @mobile:col-span-full  @mobileAndTablet:mt-0  gap-4 z-20 col-start-6">
          <Polygon trigger='#about' className='-z-10 absolute' isRegular vertexes={5} radius={windowViewport.height / 2.2} />
          <TextFadeInOnView delayInSeconds={.2} trigger='#about'>
            <p className='  @mobileAndTablet:text-[1.25rem] leading-[150%] mb-4'>I&apos;m Frontend developer, from Brazil</p>
            <p className='  @mobileAndTablet:text-[1.25rem] leading-[150%]'>
              As a Developer my favorites technologies are Next.js, React.js, TailwindCSS and SCSS. Studying Software Development since 2022, my first contact with Software Development was solving basic problems using C#. Right now I&apos;m studying Next.js, Typescript, Docker, Three.js and C#
            </p>
            <p className='  @mobileAndTablet:text-[1.25rem] mb-4 leading-[150%]'>
              My Backends knowledge&apos;s are C# (.NET Core), Java Spring Boot and Node.js
            </p>
            <p className='  @mobileAndTablet:text-[1.25rem] leading-[150%]'>
              If you haven&apos;t seen my projects, please take a look. If you find any bug, or want to contribute, open an issue, PR or contact me
            </p>
          </TextFadeInOnView>
        </article>
        {/* <CustomButton className='@desktop:col-span-2 @desktop:col-end-[-1] @mobileAndTablet:col-start-2 @mobileAndTablet:col-span-full sticky @mobileAndTablet:w-auto @mobileAndTablet:self-center'>View Resume</CustomButton> */}
      </div>
    </section>
  )
}