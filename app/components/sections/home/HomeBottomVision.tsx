import { Plus } from "lucide-react";

const roadmap = [
  {
    mainTitle: "Soon",
    gradientClass: "gradient-bg-gray",
    textClass: "orange-gradient-text",
    iconColor: "text-red-orange",
    isRightAligned: false,
    dataDelay: "0",
    items: [
      {
        title: "Member Profiles & Campaign Launch:",
        description: "Raise support through targeted campaigns and set up personalized profile pages."
      },
      {
        title: "Supporter Dashboard:",
        description: "Follow dreamers, track your support, and access exclusive content."
      }
    ]
  },
  {
    mainTitle: "Q3 2025",
    gradientClass: "gradient-bg-orange",
    textClass: "purple-gradient-text",
    iconColor: "text-light-purple",
    isRightAligned: true,
    dataDelay: "0.2",
    items: [
      {
        title: "Livestream & Donation Requests:",
        description: "Host livestreams with fan-driven donation-based interactions and challenge requests."
      }
    ]
  },
  {
    mainTitle: "Q4 2025",
    gradientClass: "gradient-bg-gray",
    textClass: "orange-gradient-text",
    iconColor: "text-red-orange",
    isRightAligned: false,
    dataDelay: "0.4",
    items: [
      {
        title: "In-Kind Donations Marketplace:",
        description: "Supporters can send gifts, gear, or services directly to creators."
      },
      {
        title: "Tiered Subscription Options:",
        description: "Enable monthly support with reward tiers, similar to Patreon."
      }
    ]
  },
  {
    mainTitle: "2026",
    gradientClass: "gradient-bg-orange",
    textClass: "purple-gradient-text",
    iconColor: "text-light-purple",
    isRightAligned: true,
    dataDelay: "0.6",
    items: [
      {
        title: "Community Hubs & Forums:",
        description: "Spaces for creators and fans to build collaborative communities."
      },
      {
        title: "Business & Brand Sponsorship Integration:",
        description: "Let companies easily support campaigns and measure social impact."
      },
      {
        title: "Creator Analytics & Insights:",
        description: "Tools to help creators track growth, engagement, and funding patterns."
      }
    ]
  }
];

const HomeBottomVision = () => {
  return (
    <div className="w-full overflow-x-hidden" id="the-base">
      <div className="wrapper">
        <div className="w-full px-[24px] py-[60px] lg:py-[120px]">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-[30%]">
              <img
                src="/images/backer-base-icon-logo-@2x.webp"
                className="max-w-full w-[80px] sm:w-[120px] md:w-[176px] block animate__animated is_animate" data-animation="animate__fadeInDown"
                alt="Backer Base"
              />

              <div className="w-full mt-[40px] md:mt-[100px] mb-[40px] md:mb-[40px] animate__animated is_animate" data-animation="animate__fadeInDown" data-delay="0.2">
                <h2 className="inline-flex purple-gradient-text uppercase text-[60px] lg:text-[100px] xl:text-[155px] leading-[88%] flex-col font-bold">The <span className="inline-flex normal-case orange-gradient-text font-splash font-normal text-[90px] md:text-[150px] lg:text-[200px] xl:text-[281px] lg:mt-[-20px] lg:mb-[-80px] leading-[120%] re">Vision</span> Of a solid base</h2>

                <p className="text-primary font-medium text-[20px] md:text-[24px] my-[24px] md:mt-[34px] md:mb-[90px] animate__animated is_animate" data-animation="animate__fadeInUp" data-delay="0.4">Every dream follows its own road map – a path of courage and hard work. In order to support dreamers and dream-builders; BackerBase also aims to realize a big dream.</p>

                <p className="inline-flex purple-gradient-text text-[32px] md:text-[40px] font-bold animate__animated is_animate" data-animation="animate__fadeInDown" data-delay="0.6">More features taking shape in the brainstorm.</p>
              </div>
            </div>

            {/* Main Roadmap Section */}
            <div className="w-full lg:w-[70%] flex flex-wrap flex-col">
              {roadmap.map((phase, index) => (
                <div
                  key={index}
                  className={`w-full md:w-[85%] min-h-[250px] md:min-h-[300px] lg:min-h-[338px] flex flex-wrap flex-col justify-center lg:w-[85%] xl:w-[72%] animate__animated is_animate ${phase.gradientClass} ${
                    phase.isRightAligned
                      ? "rounded-[24px] md:rounded-tr-[150px] md:rounded-br-[150px] md:rounded-tl-none md:rounded-bl-none self-end"
                      : "rounded-[24px] md:rounded-tl-[150px] md:rounded-bl-[150px] md:rounded-tr-none md:rounded-br-none"
                  } py-[24px] md:py-[60px] px-[24px] md:px-[60px] lg:px-[80px] xl:px-[140px]`}
                  data-animation={`${phase.isRightAligned ? "animate__fadeInRight" : "animate__fadeInLeft"}`}
                  {...(phase.dataDelay ? { "data-delay": phase.dataDelay } : {})}
                >
                  <h5
                    className={`${phase.textClass} inline-flex font-bold text-[20px] md:text-[24px] mb-[16px] uppercase`}
                  >
                    {phase.mainTitle}
                  </h5>
                  <ul className="flex flex-wrap flex-col gap-y-[16px]">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="w-full flex gap-[14px]">
                        <Plus
                          className={`w-[24px] h-[24px] md:w-[32px] md:h-[32px] ${phase.iconColor}`}
                        />
                        <div className="flex flex-col flex-wrap">
                          <h6 className="text-primary text-[18px] md:text-[24px] font-bold leading-[108%]">
                            {item.title}
                          </h6>
                          <p className="text-primary text-[16px] md:text-[18px] lg:text-[24px] leading-[108%]">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* End Main Roadmap Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomVision;
