import Associates from "@/components/Associates/Associates";
import FooterBanner from "@/components/FooterBanner/FooterBanner";
import HeroSwipper from "@/components/HeroSwipper/HeroSwipper";
import HomeMainLayout from "@/components/common/HomeMainLayout/HomeMainLayout";
import { fetchCountryName, getMediaPerCategory } from "./Api/api";
import DisplayError from "@/components/common/DisplayError/DisplayError";

export default async function Home() {
  try {
    const homePage = await Promise.all([
      getMediaPerCategory("trending", "movie", 1),
      getMediaPerCategory("discover", "movie", 2),
      getMediaPerCategory("upcoming", "movie", 4),
      getMediaPerCategory("top_rated", "movie", 6),
      getMediaPerCategory("top_rated", "tv", 5),
      getMediaPerCategory("now_playing", "movie", 2),
      getMediaPerCategory("airing_today", "tv", 4),
    ]);

    const [

      trendingMoviesRes,
      sliderMovies,
      upcomingMovies,
      topRatedMovies,
      topRatedSeries,
      nowPlayingMovies,
      seriesAiringToday,
    ] = homePage;

    const getCountry = async () => {
      let country
      try {
        country = await fetchCountryName()

      } catch (error) {
        country = "Kenya"

      }
    }
    const countryName = getCountry()

    return (
      <>
        <HeroSwipper sliderMovies={sliderMovies} />
        <HomeMainLayout
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
    console.error("Error fetching data at Home", "\n=> Message: ", error.message, "\n=> Cause: ", error.cause);
    return <DisplayError message={error.message} />;
  }
}
