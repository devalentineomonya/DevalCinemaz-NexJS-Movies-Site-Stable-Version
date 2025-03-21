import Featured from "@/screens/home/widgets/Featured";
import Hero from "@/screens/home/widgets/Hero";
import TopSelection from "@/screens/home/widgets/TopSelection";
import TopSeries from "@/screens/home/widgets/TopSeries";
import TopTen from "@/screens/home/widgets/TopTen";
import Upcoming from "@/screens/home/widgets/Upcoming";

export default function Home() {
  return (
    <>
      <Hero />
      <TopTen />
      <Featured />
      <Upcoming />
      <TopSelection />
      <TopSeries />
    </>
  );
}
