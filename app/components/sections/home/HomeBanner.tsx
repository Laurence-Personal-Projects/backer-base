import AnchorButton from "@/app/components/ui/anchorbutton";

const HomeBanner = () => {
  return (
    <div className="w-full">
      <div className="banner-section w-full overflow-hidden px-[24px]">
        <div className="wrapper">
          <div className="w-full flex justify-end flex-wrap lg:min-h-[100vh] pt-[90px]">
            <h1 className="orange-gradient-text font-bold leading-[88%] uppercase text-[10.3vw] md:text-[11.5vw] xl:text-[11vw] z-[1] text-center absolute left-0 right-0 sm:top-[150px] animate__animated is_animate" data-animation="animate__fadeInDown" data-delay="0.6">From</h1>
            <h1 className="orange-gradient-text text-[10.3vw] md:text-[11.5vw] uppercase font-bold xl:text-[11vw] leading-[88%] text-center absolute left-0 right-0 top-[150px] sm:top-[250px] lg:top-[330px] z-[5] animate__animated is_animate" data-animation="animate__fadeInUp" data-delay="0.6">Base to <br /> Breakthrough</h1>

            <div className="mx-auto w-full max-w-[600px] lg:max-w-[850px] flex justify-center items-end z-[2] relative mb-[-100px] sm:mb-0">
              <img src="/images/banner-football-player-portrait.webp" alt="football player" className="object-contain w-full animate__animated is_animate" data-animation="animate__fadeInUp" />
            </div>

            <div className="purple-gradient-text-2 absolute right-0 top-[35%] sm:top-[inherit] sm:bottom-[40%] lg:bottom-[20%] z-[6] text-[11vw] sm:text-[9vw] p-[10px] leading-[88%] font-splash rotate-[-18.75deg] animate__animated is_animate" data-animation="animate__fadeIn" data-delay="1.8">
              Greatness <br /> Awaits
            </div>

            {/*Banner bottom - content */}
            <div className="w-full justify-between flex flex-wrap z-[6] sm:absolute left-0 right-0 bottom-0 lg:pb-[60px]">
              <div className="w-full mb-[40px] lg:mb-0 lg:w-[50%] animate__animated is_animate" data-animation="animate__fadeInLeft" data-delay="1">
                <p className="text-[24px] lg:text-[38px] leading-[120%] text-primary w-full max-w-[500px]">A Dynamic Platform Connecting Dreams with Individual & Corporate Support.</p>
              </div>
              <div className="w-full lg:w-[50%] flex lg:justify-end lg:items-end flex-wrap gap-[20px] animate__animated is_animate" data-animation="animate__fadeInRight" data-delay="1">
                <AnchorButton variant="primary" additionalClassName="py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold">Sign Up</AnchorButton>
                <AnchorButton variant="secondary" additionalClassName="py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold">Explore The Base</AnchorButton>
              </div>
            </div>
            {/*Banner bottom - content */}

          </div>
        </div>
      </div>
    </div>
  )
};

export default HomeBanner;