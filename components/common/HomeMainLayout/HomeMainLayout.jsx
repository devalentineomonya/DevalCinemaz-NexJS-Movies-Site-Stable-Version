"use client"
import SmallSectionLayout from "./SmallSectionLayout/SmallSectionLayout";
import TopMovieCard from "../MovieCards/TopMovieCard/TopMovieCard";
import ComingSoon from "../MovieCards/ComingSoon/ComingSoon";
import TrendingMovies from "../MovieCards/TrendingMovies/TrendingMovies";
import NewRelease from "../MovieCards/NewRelease/NewRelease";
import MovieInCategory from "../MovieCards/MovieInCategory/MovieInCategory";

const HomeMainLayout = ({
  trendingMoviesRes,
  countryName,
  upcomingMovies,
  topRatedMovies,
  topRatedSeries,
  nowPlayingMovies,
  seriesAiringToday,
}) => {
  return (
    <main className="dark:bg-customDark bg-customWhite w-full flex justify-center  h-fit pb-20">
      <div className="max-w-[1400px]  px-10 pt-10 w-full flex flex-col ">
        <SmallSectionLayout title={`Top 10 movies in ${countryName} today`}>
          {trendingMoviesRes.slice(10, 20).map((trendingMovie, i) => (
            <TopMovieCard
              key={i}
              number={i + 1}
              trendingMovie={trendingMovie}
            />
          ))}
        </SmallSectionLayout>

        <SmallSectionLayout
          title="Coming soon on DevalCinemaz"
          viewMore={true}
        >
          {upcomingMovies.slice(6, 8).map((upcomingMovie, i) => (
            <ComingSoon key={i} upcomingMovie={upcomingMovie} />
          ))}
        </SmallSectionLayout>

        <SmallSectionLayout title="Top rated Movies" viewMore={true}>
          {
            topRatedMovies?.slice(0, 10)
              .map((topRatedMovie, i) => (
                <NewRelease
                  movieInfo={topRatedMovie}
                  key={i}
                  type="movie"
                  width="72"
                />
              ))}
        </SmallSectionLayout>

        <SmallSectionLayout title="Top Rated Series" viewMore={true}>
          {topRatedSeries?.slice(0, 10)
              .map((topRatedSeriesData, i) => (
                <NewRelease
                  movieInfo={topRatedSeriesData}
                  key={i}
                  type="series"
                  width="72"
                />
              ))}
        </SmallSectionLayout>
        <SmallSectionLayout title="Now Playing Movies" viewMore={true}>
          {nowPlayingMovies?.slice(7, 17)
              .map((nowPlayingMovie, i) => (
                <TrendingMovies
                  mediaInfo={nowPlayingMovie}
                  key={i}
                  mediaType="movies"
                />
              ))}
        </SmallSectionLayout>
        <SmallSectionLayout title="Series Airing Today" viewMore={true}>
          {seriesAiringToday?.slice(6, 16)
              .map((seriesAiringTodayInfo, i) => (
                <MovieInCategory
                  seriesAiringTodayInfo={seriesAiringTodayInfo}
                  key={i}
                  mediaType="series"
                />
              ))}
        </SmallSectionLayout>
      </div>
    </main>
  );
};

export default HomeMainLayout;
