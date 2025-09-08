import HomeBanner from "@/app/components/sections/home/HomeBanner";
import HomeMiddle from "@/app/components/sections/home/HomeMiddle";
import HomeMiddle2 from "@/app/components/sections/home/HomeMiddle2";
import HomeMain from "@/app/components/sections/home/HomeMain";
import HomeMainBottom from "@/app/components/sections/home/HomeMainBottom";
import HomeBottomBackerInfo from "@/app/components/sections/home/HomeBottomBackerInfo";
import HomeBottomVision from "@/app/components/sections/home/HomeBottomVision";
import HomeBottom from "@/app/components/sections/home/HomeBottom";

const Home = () => {
  return (
    <div className="w-full">
      <HomeBanner />
      <HomeMiddle />
      <HomeMiddle2 />
      <HomeMain />
      <HomeMainBottom />
      <HomeBottomBackerInfo />
      <HomeBottomVision />
      <HomeBottom />
    </div>
  );
}

export default Home;