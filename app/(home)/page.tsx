import Featured from "../features/home/widgets/Featured";
import Hero from "../features/home/widgets/Hero";
import TopSelection from "../features/home/widgets/TopSelection";
import TopSeries from "../features/home/widgets/TopSeries";
import TopTen from "../features/home/widgets/TopTen";
import Upcoming from "../features/home/widgets/Upcoming";

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
