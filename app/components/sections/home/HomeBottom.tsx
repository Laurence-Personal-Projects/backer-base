import AnchorButton from "@/app/components/ui/anchorbutton";

const HomeBottom = () => {
  return (
    <div className="w-full">
      <div className="w-full px-[24px] py-[60px] lg:py-[120px] overflow-x-hidden">
        <div className="wrapper">
          <div className="w-full">
            <h4 className="uppercase font-bold font-poppins text-[38px] md:text-[60px] xl:text-[100px] 2xl:text-[191px] leading-[100%] md:leading-[88%] orange-gradient-text break-words animate__animated is_animate" data-animation="animate__backInRight">More Than Crowdfunding– It’s a <span className="purple-gradient-text">Movement.</span></h4>
          </div>
          <div className="w-full justify-between flex flex-wrap mt-[24px] lg:mt-[50px] max-w-full">
            <div className="w-full lg:w-[55%] animate__animated is_animate" data-animation="animate__fadeInLeft" data-delay="0.6">
              <p className="text-[24px] lg:text-[38px] text-white">Join us in empowering the next wave of dreamers and dream-builders. Whether you’re here to support a dream or chase your own, BackerBase is where purpose meets possibility—powered by community and built for growth.</p>
            </div>
            <div className="w-full lg:w-[45%] mt-[40px] lg:mt-0 flex flex-wrap gap-[8px] md:gap-[20px] lg:justify-end lg:items-end animate__animated is_animate" data-animation="animate__fadeInRight" data-delay="0.6">
              <AnchorButton variant="primary" additionalClassName="py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold">Join The Base</AnchorButton>
              <AnchorButton variant="secondary" additionalClassName="py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold">Be a Backer</AnchorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBottom;