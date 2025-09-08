'use client';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from '@radix-ui/react-tabs';
import { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import AnchorButton from "@/app/components/ui/anchorbutton";


// Define the tabs for the TheBaseTabList component
const tabs = [
  "All",
  "Featured",
  "Popular",
  "Recent",
  "Categories",
  "Backer Type",
];

// Data for backer base items
const backerBaseItems = [
  {
    title: "TRAINING GROUND RENTAL - 1 Month",
    subtext: "Best Football Academy",
    image: "/images/backerbase-field-@2x.webp",
    price: 5_000,
    hour: 2,
    needed: 8,
    total: 12,
    tags: ["Sports", "Training", "Foundation"]
  },
  {
    title: "TRAINING GROUND RENTAL - 1 Month",
    subtext: "Best Football Academy",
    image: "/images/backerbase-field-@2x.webp",
    price: 5_000,
    hour: 2,
    needed: 6,
    total: 12,
    tags: ["Sports", "Training", "Foundation"]
  },
  {
    title: "TRAINING GROUND RENTAL - 1 Month",
    subtext: "Best Football Academy",
    image: "/images/backerbase-field-@2x.webp",
    price: 5_000,
    hour: 2,
    needed: 11,
    total: 12,
    tags: ["Sports", "Training", "Foundation"]
  },
];

const TheBaseTabList = ({ hasSearch = true }: { hasSearch?: boolean }) => {
  // State for search term and debounced value
  const [searchTerm, setSearchTerm] = useState('');
  const [debounced, setDebounced] = useState('');
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Ref to store tab content elements for fade-in effect
  const tabContentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Effect to clear search term when the active tab changes
  useEffect(() => {
    setSearchTerm('');
  }, [activeTab]);

  // Effect to debounce the search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(searchTerm.toLowerCase());
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Fade-in effect on tab change
  useEffect(() => {
    const el = tabContentRefs.current[activeTab];
    if (el) {
      el.classList.remove("fade-in-tab");
      void el.offsetWidth; // force reflow
      el.classList.add("fade-in-tab");
    }
  }, [activeTab]);

  // Function to check if a value contains the search term
  const containsText = (value: unknown, search: string): boolean => {
    if (typeof value === "string") {
      return value.toLowerCase().includes(search.toLowerCase());
    }
    if (Array.isArray(value)) {
      return value.some(item => containsText(item, search));
    }
    if (typeof value === "object" && value !== null) {
      return Object.values(value).some(val => containsText(val, search));
    }
    return false;
  };

  // Filter items based on the search term
  const filteredItems = debounced
    ? backerBaseItems.filter(item => containsText(item, debounced))
    : backerBaseItems;

  return (
    <div className="w-full">
      <div className="w-full py-[40px]">
        <div className="wrapper">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tabs Navigation */}
            <TabsList className="p-[8px] flex flex-wrap items-center justify-center lg:justify-between gap-[24px] lg:gap-2 mb-6">
              {tabs.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item}
                  className="data-[state=active]:font-bold font-normal text-[14px] md:text-[20px] uppercase"
                >
                  {item}
                </TabsTrigger>
              ))}

              {/* Optional Search */}
              {hasSearch && (
                <div className="flex items-center gap-3 px-2 max-w-md border border-solid border-primary rounded-[65px] py-[8px] pl-[16px] pr-[12px]">
                  <Search className="w-[22px] h-[22px] text-primary" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-white w-full text-[16px] md:text-[20px]"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                  />
                </div>
              )}
            </TabsList>

            {/* Tabs Content */}
            {tabs.map((item) => (
              <TabsContent
                key={item}
                value={item}
                className="w-full opacity-0"
                ref={(el) => {
                  tabContentRefs.current[item] = el;
                }}
              >
                <div className="w-full">
                  {filteredItems.length > 0 ? (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[24px] xl:gap-[70px]">
                      {filteredItems.map((item, index) => (
                        <div
                          key={index}
                          className="backer-box border relative border-primary border-solid rounded-[22px] w-full text-center flex justify-end flex-wrap items-end min-h-[400px] lg:min-h-[750px]"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full rounded-[22px] absolute"
                          />
                          <div className="w-full px-[24px] lg:px-[32px] relative z-[5] pb-[32px] lg:pb-[55px]">
                            <h4 className="font-bold text-[18px] text-primary uppercase leading-[102%] md:text-[24px] xl:text-[44px] pb-[12px]">
                              {item.title}
                            </h4>
                            <p className="font-medium text-[16px] lg:text-[24px] text-primary">{item.subtext}</p>

                            {/* Progress Bar */}
                            <div className="w-full mt-4 mb-6">
                              <div className="w-full h-[16px] bg-primary rounded-[16px] overflow-hidden">
                                <div
                                  className="h-full rounded-[16px] gradient-purple-orange transition-all duration-500"
                                  style={{
                                    width: `${Math.min((item.needed / item.total) * 100, 100)}%`
                                  }}
                                ></div>
                              </div>
                            </div>
                            {/* Progress Bar */}

                            {/* Needed vs Total */}
                            <div className="text-[14px] leading-[120%] lg:text-[24px] text-primary text-left mb-[16px]">
                              {item.needed} More Needed | P{item.price.toLocaleString()} / {item.hour} hrs
                            </div>

                            <div className="inline-flex w-full mb-[30px]">
                              <strong>Tags: </strong>
                              <ul className="pl-1">
                                {item.tags.map((tag, tagIndex) => (
                                  <li
                                    key={tagIndex}
                                    className="inline-block underline text-primary text-[14px] md:text-[16px] ml-[2px] last:mr-0"
                                  >
                                    {tag}
                                    {tagIndex < item.tags.length - 1 && ','}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <AnchorButton
                              variant="gradient_orange"
                              additionalClassName="py-[12px] px-[24px] md:px-[40px] flex items-center justify-center uppercase font-bold max-w-[257px] mx-auto"
                            >
                              Be a backer
                            </AnchorButton>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-primary text-center text-[24px] font-medium tracking-wide">
                      No Data Available
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TheBaseTabList;
