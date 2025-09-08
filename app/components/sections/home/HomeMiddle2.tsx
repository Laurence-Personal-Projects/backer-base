import { Plus } from 'lucide-react';
import AnchorButton from "@/app/components/ui/anchorbutton";

const dreamers = [
  {
    title: "Dreamers",
    image: "/images/mid-img-1-@2x.webp",
    delay: "0.3",
    dreamerList: [
      "Monetize your journey, not just your success.",
      "Build a community of loyal supporters.",
    ],
  },
  {
    title: "Backers",
    image: "/images/mid-img-2-@2x.webp",
    delay: "0.6",
    itemClass: "mt-0 xl:mt-[20%]",
    dreamerList: [
      "Directly impact lives by supporting who you want, the way you want.",
      "Earn rewards, and be part of success stories.",
    ],
  },
  {
    title: "Corporate Sponsors",
    image: "/images/mid-img-3-@2x.webp",
    delay: "0.9",
    itemClass: "mt-0 xl:mt-[40%]",
    dreamerList: [
      "Engage with communities in authentic, high-visibility ways.",
      "Fulfill CSR goals and gain targeted brand exposure",
    ],
  }
];

const HomeMiddle2 = () => {
  return (
    <div className="w-full">
      <div className="w-full px-[24px] py-[40px] lg:py-[40px] overflow-hidden">
        <div className="wrapper">
          <div className="w-full flex justify-between items-start flex-wrap gap-y-[40px] xl:gap-0">

            <div className="w-full xl:w-[60%] xl:absolute right-0 top-0 z-[1] min-h-[100px] xl:min-h-0 lg:min-h-[200px]">
              <h2 className="inline-flex purple-gradient-text uppercase text-[42px] lg:text-[100px] 2xl:text-[145px] leading-[88%] flex-col font-bold animate__animated is_animate" data-animation="animate__bounceInRight">How Dreams Become</h2>
              <div className="orange-gradient-text absolute right-0 md:right-[6%] xl:right-[2%] xl:top-[38%] z-[6] text-[11vw] lg:text-[11vw] leading-[88%] font-splash rotate-[-18.75deg] min-h-[100px] lg:min-h-[244px] xl:min-h-[280px] inline-flex items-center animate__animated is_animate px-[32px]" data-animation="animate__bounceIn" data-delay="0.6">Reality</div>
            </div>

            <div className="w-full flex justify-between items-stretch xl:items-start flex-wrap gap-y-[40px] xl:gap-0">
              {/*Boxes */}
              {dreamers.map((item, index) => (
                <div key={index} className={`z-[2] relative w-full lg:w-[32%] max-w-[604px] mx-auto p-[24px] xl:p-[40px] rounded-[28px] bg-white animate__animated is_animate ${item.itemClass}`} data-animation="animate__flipInY" data-delay={item.delay}>
                  <img src={item.image} className="w-[526px] mx-auto max-w-full rounded-[28px] mb-[32px] xl:mb-[60px]" alt="backerbase"/>
                  <div className="w-full flex flex-wrap justify-center">
                    <h4 className="uppercase text-black font-bold text-[32px] md:text-[40px] 2xl:text-[64px] leading-[88%] text-center">{item.title}</h4>
                    <ul className="inline- flex-col xl:gap-0 gap-y-[8px] mt-[24px] lg:mt-[35px]">
                      {item.dreamerList.map((list, index) => (
                        <li key={index} className="relative pl-[32px] text-[16px] xl:text-[22px] text-black leading-[120%]">
                        <Plus className="w-[16px] h-[16px] text-black absolute left-0 top-[3px]" />
                        {list}
                      </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              {/*END >> Boxes */}
            </div>

          </div>

          <div className="w-full mt-[40px] xl:mt-0 xl:w-[27%] max-w-full xl:absolute bottom-0 2xl:bottom-[20vw] 2xl:pl-[20px] left-0 z-[3] animate__animated is_animate" data-animation="animate__fadeInUp">
            <p className="text-primary text-[20px] md:text-[24px] font-medium">BackerBase is the place where Dreamers and Backers can work together to make dreams a reality</p>
            <div className="w-full mt-[40px] flex flex-wrap gap-[16px]">
                <AnchorButton variant="primary" additionalClassName="py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold">
                  Sign Up
                </AnchorButton>
                <AnchorButton variant="secondary" additionalClassName="py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold">
                  Explore The Base
                </AnchorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle2;