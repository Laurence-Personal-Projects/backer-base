'use client';

import { useEffect, useRef } from "react";
import AnchorButton from "@/app/components/ui/anchorbutton";


const HomeMainBottom = () => {
  const skaterRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!skaterRef.current || !sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const scrollOffset = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerPoint = scrollOffset + sectionTop - viewportHeight;

      // If the section is visible in the viewport
      if (scrollOffset >= triggerPoint) {
        const distanceScrolled = scrollOffset - triggerPoint;

        // You can tweak this factor to control parallax speed
        const parallaxOffset = distanceScrolled * 0.3;

        skaterRef.current.style.transform = `translateY(-${parallaxOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="w-full relative support-main-section">
      {/*Parallax Image*/}
      <img ref={skaterRef} src="/images/skater-guy-@2x.webp" alt="skater" className="max-w-[200px] lg:max-w-[600px] 2xl:max-w-[1127px] w-full absolute left-0 top-0 z-[24]"/>
      {/*Image */}
      <img src="/images/ragged-lines-@2x.webp" className="h-[25px] w-full max-w-full object-cover relative mb-[-5px] z-[5]"/>
      <div className="w-full gradient-bg-purle-gray support-section px-[24px] py-[60px] pb-[40px] 2xl:pb-[80px]">
        <div className="wrapper">
          <div className="flex flex-wrap justify-center flex-wrap flex-col 2xl:flex-row 2xl:justify-end w-full 2xl:pr-[17vw] relative">
            <div className="text-center 2xl:text-left 2xl:max-w-[700px] relative animate__animated is_animate" data-animation="animate__fadeInUp">
              <h2 className="inline-flex purple-gradient-text uppercase text-[42px] lg:text-[100px] 2xl:text-[145px] leading-[88%] flex-col font-bold">Support The</h2>
              <div className="orange-gradient-text 2xl:min-w-[500px] 2xl:text-left 2xl:mt-0 mt-[-40px] text-center 2xl:absolute 2xl:bottom-[-90px] 2xl:right-[10px] text-[14vw] md:text-[9.5vw] leading-[88%] font-splash py-[40px] px-[32px]">Rise</div>
            </div>

            <img src="/images/from-base-breaktrhough-@2x.webp" className="slow-spin 2xl:absolute 2xl:left-[inherit] 2xl:right-[120px] 2xl:top-[140px] w-full max-w-[140px] md:max-w-[180px] 2xl:max-w-[254px] z-[10] left-0 right-0 2xl:mx-[inherit] mx-auto block top-[80px]" />
          </div>
        </div>
      </div>

      <div className="w-full relative 2xl:pb-[400px] overflow-hidden">
        <div className="wrapper">
          <div className="flex justify-end flex-wrap relative animate__animated is_animate" data-animation="animate__fadeInRight">

            <img src="/images/support-rise-img-@2x.webp" alt="support" className="2xl:block hidden max-w-[427px] w-full" />
            <div className="bg-card-support py-[40px] lg:py-[60px] px-[24px] lg:px-[65px] text-white 2xl:max-w-[916px] text-center 2xl:text-left">
              <h4 className="uppercase text-[32px] font-bold lg:text-[40px] xl:text-[64px] leading-[120%] mb-[40px]">Be a Backer</h4>

              <div className="w-full flex flex-wrap justify-between">
                <div className="w-full 2xl:w-[52%]">
                  <p className="w-full font-medium text-[16px] lg:text-[24px]">For most of us, pursuing our dreams is a lonely journey. Don’t you wish there was someone who had your back when you were just starting? Be that someone to a dreamer.</p>
                </div>

                <div className="w-full 2xl:w-[46%] mt-[32px]">
                  <AnchorButton additionalClassName="py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold max-w-[243px] w-full mx-auto bg-[#FBFBE6] text-red-orange transition-all duration-300 hover:bg-[#1E1E1E] hover:text-white">
                    Explore The Base
                  </AnchorButton>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeMainBottom;