import Associates from "@/components/Associates/Associates";
import FooterBanner from "@/components/FooterBanner/FooterBanner";
import HeroSwipper from "@/components/HeroSwipper/HeroSwipper";
import HomeMainSection from "@/components/HomeMainSection/HomeMainSection";
import { fetchCountryName, getMediaPerCategory } from "./Api/api";


export default async function Home() {

  try {
    const homePage = await Promise.all([
      fetchCountryName(),
      getMediaPerCategory("trending", "movie", 1),
      getMediaPerCategory("discover", "movie", 2),
      getMediaPerCategory("upcoming", "movie", 4),
      getMediaPerCategory("top_rated", "movie", 6),
      getMediaPerCategory("top_rated", "tv", 5),
      getMediaPerCategory("now_playing", "movie", 2),
      getMediaPerCategory("airing_today", "tv", 4)


    ]);

    const [countryName, trendingMoviesRes, sliderMovies, upcomingMovies, topRatedMovies, topRatedSeries, nowPlayingMovies, seriesAiringToday] = homePage;
    return (
      <>
        <HeroSwipper sliderMovies={sliderMovies} />
        <HomeMainSection
          countryName={countryName}
          trendingMoviesRes={trendingMoviesRes}
          upcomingMovies={upcomingMovies}
          topRatedMovies={topRatedMovies}
          topRatedSeries={topRatedSeries}
          nowPlayingMovies={nowPlayingMovies}
          seriesAiringToday={seriesAiringToday}
        />
        <FooterBanner bannerImage={trendingMoviesRes} />
        <Associates />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);

  }
}

