'use client';

import { useEffect, useRef } from "react";
import AnchorButton from "@/app/components/ui/anchorbutton";

const slogan = [
  {
    title: "Customizable creator profiles",
    dataDelay: "0",
  },
  {
    title: "Campaign creation tools",
    dataDelay: "0.6",
  },
];

const HomeBottomBackerInfo = () => {
  const backerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!backerRef.current) return;

      const rect = backerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementTop = scrollY + rect.top;

      // Trigger only if bottom of scroll (scrollY + window height) reaches element top
      if (scrollY + windowHeight >= elementTop) {
        const offset = (scrollY + windowHeight - elementTop) * 0.15;
        backerRef.current.style.backgroundPosition = `center ${-offset}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div
        ref={backerRef}
        id="be-a-backer"
        className="w-full relative btm-backer pt-[60px] pb-[20px] md:py-[60px] px-[24px] lg:pt-[300px] overflow-x-hidden"
      >
        <div className="wrapper">
          <div className="w-full flex flex-wrap justify-between">

            <div className="w-full relative z-[10] lg:w-[45%] pt-0 lg:pt-[60px] pb-[40px] animate__animated is_animate" data-animation="animate__fadeInDown">
              <h4 className="orange-gradient-text inline-flex text-[40px] lg:text-[72px] font-bold leading-[88%] uppercase mb-[20px]">BackerBase’s Got Your Back</h4>
              <p className="max-w-[439px] w-full text-primary text-[20px] md:text-[24px] font-medium mb-[24px] md:mb-[35px]">BackerBase is designed with features that will provide members with a truly rewarding experience.</p>
              <div className="w-full mt-[40px] lg:mt-0 flex flex-wrap gap-[16px] animate__animated is_animate" data-animation="animate__fadeInLeft" data-delay="0.6">
                <AnchorButton variant="primary" additionalClassName="py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold">Sign Up</AnchorButton>
                <AnchorButton variant="secondary" additionalClassName="py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold">Explore The Base</AnchorButton>
              </div>
            </div>

            <div className="w-full lg:w-[45%] relatize z-[20] flex flex-wrap flex-col gap-y-[40px] md:gap-y-[75px] pl-0 md:pl-[20px] pr-0 xl:pr-[8vw]">

              {slogan.map((slogan, index) => (
                <div key={index} className="w-full gradient-full-orange rounded-[40px] text-white px-[24px] py-[40px] lg:px-[40px] flex flex-wrap flex-col gap-[20px] animate__animated is_animate" data-animation="animate__fadeInDown" data-delay={slogan.dataDelay}>
                  <span className="text-[40px] md:text-[80px] font-medium leading-[100%]">(√)</span> <h4 className="text-[32px] font-bold lg:text-[40px] xl:text-[64px] leading-[120%]">{slogan.title}</h4>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomBackerInfo;
