import Featured from "../features/home/widgets/Featured";
import Hero from "../features/home/widgets/Hero";
import TopTen from "../features/home/widgets/TopTen";

export default function Home() {
  return (
    <>
      <Hero />
      <TopTen />
      <Featured />
    </>
  );
}
