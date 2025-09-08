"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from '@radix-ui/react-tabs';

import TheBaseTabList from "@/app/components/sections/TheBaseTabList";
import AnchorButton from "@/app/components/ui/anchorbutton";

const HomeMain = () => {
  return (
    <div className="w-full">
      <div className="w-full pt-[40px] px-[24px] pb-[60px] lg:pb-[120px]" id="organization">
        <div className="wrapper">

          <div className="w-full mb-[40px] lg:mb-[60px] animate__animated is_animate" data-animation="animate__fadeInUp">
            <h2 className="text-center purple-gradient-text uppercase text-[42px] lg:text-[100px] 2xl:text-[145px] leading-[88%] flex-col font-bold">The Base of</h2>
            <div className="orange-gradient-text text-center mt-[-40px] lg:mt-[-80px] text-[10vw] leading-[88%] font-splash py-[40px] px-[32px]">Dreams</div>
            <p className="w-full text-center font-medium text-[16px] lg:text-[24px] text-primary">Looking for someone or something to support? <br />The Base is the field where dreamers and dream backers meet to make dreams happen. <br />Check them out based on your interests, or search for one you already know, to give your support.</p>
          </div>

          {/* Parent Tabs */}
          <div className="w-full flex justify-center pb-[24px] lg:pb-[60px] animate__animated is_animate" data-animation="animate__fadeIn">
            <Tabs defaultValue="individual" className="w-full">
              <div className="flex justify-center flex-wrap">
               <TabsList className="p-[8px] flex justify-center gap-2 mb-6 the-base-parent-tab">
                  <TabsTrigger
                    value="individual"
                    className="p-[16px] lg:min-w-[240px] rounded-[40px] text-[14px] md:text-[16px] font-bold leading-[100%] uppercase text-primary transition-all duration-300 linear hover:bg-primary hover:text-gray-black data-[state=active]:bg-primary data-[state=active]:text-gray-black"
                  >
                    Individual
                  </TabsTrigger>

                  <TabsTrigger
                    value="organization"
                    className="p-[16px] lg:min-w-[240px] rounded-[40px] text-[14px] md:text-[16px] font-bold leading-[100%] uppercase text-primary transition-all duration-300 linear hover:bg-primary hover:text-gray-black data-[state=active]:bg-primary data-[state=active]:text-gray-black"
                  >
                    Organization
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent className="w-full" value="individual">
                <TheBaseTabList />
              </TabsContent>

              <TabsContent className="w-full" value="organization">
                <TheBaseTabList />
              </TabsContent>
            </Tabs>
          </div>
          {/* End >> Parent Tabs */}

          <div className="w-full animate__animated is_animate" data-animation="animate__fadeInUp">
            <p className="w-full text-center font-medium text-[16px] lg:text-[24px] text-primary mb-[24px] lg:mb-[32px]">Discover more dreamers and more dreams that you can help become reality.</p>
            <AnchorButton variant="secondary" additionalClassName="py-[12px] px-[24px] md:py-[16px] md:px-[40px] flex items-center justify-center uppercase font-bold max-w-[243px] w-full mx-auto">
              Explore The Base
            </AnchorButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeMain;