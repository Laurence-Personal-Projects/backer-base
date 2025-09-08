const theGap = [
  "Amazing individuals and groups lack consistent, meaningful support.",
  "Current platforms are fragmented: crowdfunding, sponsorship, patronage, and content monetization are siloed.",
  "Supporters want meaningful, transparent engagement with dreamers, innovators they believe in.",
];

const benefits = [
  "Enables individuals and groups to receive financial and in-kind support through campaigns, livestreams, content, etc.",
  "An all-in-one platform that combines crowdfunding, content-driving support, sponsorship, and community rewards.",
  "Build a transparent and rewarding ecosystem for all users.",
];

const HomeMiddle = () => {
  return (
    <div className="w-full px-[24px] py-[60px] overflow-hidden">
      <div className="wrapper">
        <div className="w-full flex justify-between flex-wrap gap-y-[40px] xl:gap-y-0">
          <div className="w-full xl:w-[36%]">
            <img
              src="/images/backer-base-icon-logo-@2x.webp"
              className="max-w-full w-[80px] sm:w-[120px] md:w-[176px] lg:w-[270px] mb-[24px] lg:mb-[40px] block animate__animated is_animate" data-animation="animate__fadeInDown"
              alt="Backer Base"
            />

            <h2 className="inline-flex purple-gradient-text uppercase text-[42px] lg:text-[100px] 2xl:text-[145px] leading-[88%] flex-col font-bold animate__animated is_animate" data-animation="animate__fadeInLeft">What Backerbase Provides</h2>
          </div>
          <div className="w-full items-stretch xl:w-[64%] flex flex-wrap xl:flex-col justify-between xl:items-end gap-[16px] xl:min-h-[870px] relative">
              <div className="w-full md:w-[48.5%] px-[24px] py-[40px] xl:py-[60px] xl:px-[40px] gradient-full-orange rounded-[58px] duration-300 linear transition-all relative z-[1] top-0 right-0 hover:z-[4] hover:top-[10px] hover:right-[10px] animate__animated is_animate" data-animation="animate__bounceInRight">
                <h4 className="text-white mb-[24px] xl:mb-[60px] uppercase leading-[88%] text-[24px] md:text-[42px] xl:text-[56px] font-bold text-center">The Gap</h4>
                  <ol className="flex flex-col flex-wrap gap-y-[16px] lg:gap-y-[35px]">
                    {theGap.map((text, index) => (
                      <li
                        key={index}
                        className="relative pl-[40px] text-[16px] lg:text-[22px] text-white leading-[120%]"
                      >
                        <span className="text-white font-medium text-[16px] absolute left-0 top-[2px]">
                          ({index + 1})
                        </span>{" "}
                        {text}
                      </li>
                    ))}
                  </ol>
              </div>

              <div className="w-full md:w-[48.5%] px-[24px] py-[40px] xl:py-[60px] xl:px-[40px] bg-white rounded-[58px] duration-300 linear transition-all xl:absolute bottom-0 right-0 lg:right-[125px] z-[2] hover:z-[6] hover:bottom-[10px] hover:right-[120px] animate__animated is_animate" data-animation="animate__bounceInRight" data-delay="0.6">
                <h4 className="orange-gradient-text mb-[24px] xl:mb-[60px] uppercase leading-[88%] text-[24px] md:text-[42px] xl:text-[56px] font-bold text-center">Backerbase</h4>
                  <ol className="flex flex-col flex-wrap gap-y-[16px] lg:gap-y-[35px]">
                    {benefits.map((text, index) => (
                      <li
                        key={index}
                        className="relative pl-[40px] text-[16px] lg:text-[22px] text-black leading-[120%]"
                      >
                        <span className="text-red-orange font-medium text-[16px] absolute left-0 top-[2px]">
                          ({index + 1})
                        </span>{" "}
                        {text}
                      </li>
                    ))}
                  </ol>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;