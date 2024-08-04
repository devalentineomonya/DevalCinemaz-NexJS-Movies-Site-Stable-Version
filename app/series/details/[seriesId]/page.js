import MediaDetailsContainer from "@/Components/MediaDetailsContainer/MediaDetailsContainer"
import SeriesNavbar from "@/Components/SeriesNavbar/SeriesNavbar"
import { getInfo, getMediaItems, getMediaPerCategory } from "@/app/Api/api";
import NotFound from "@/app/movies/not-found";

const tabsNames = [
  {
    id: 1,
    name: "Seasons",
  },
  {
    id: 2,
    name: "Media",

  },
  {
    id: 3,
    name: "Information"
  },
  {
    id: 4,
    name: "CastList"
  }

]

const page = async ({ params }) => {
  const seriesId = parseInt(params.seriesId);

  if (isNaN(seriesId)) {
    return <NotFound />
  }

  try {
    const movieData = await Promise.all([
      getInfo(seriesId, "tv"),
      getMediaItems(seriesId, "tv", "videos"),
      getMediaItems(seriesId, "tv", "credits"),
      getMediaItems(seriesId, "tv", "reviews"),
      getMediaItems(seriesId, "tv", "recommendations"),
      getMediaItems(seriesId, "tv", "similar"),
      getMediaPerCategory("on_the_air", "tv")
    ]);

    const [seriesInfo, videoInfo, castList, seriesReviews, recommendedSeries, similarSeries, upcomingSeries] = movieData;

    return (
      <>
        <div className="pt-[65px] dark:bg-customDark bg-customWhite">
          <SeriesNavbar h="[115px]" tabsNames={tabsNames} seriesId={seriesId}/>
          <MediaDetailsContainer
            movieInfo={seriesInfo}
            videoInfo={videoInfo}
            castList={castList}
            movieReviews={seriesReviews}
            recommendedMovies={recommendedSeries}
            similarMovies={similarSeries}
            upcomingMovies={upcomingSeries}
            type="Series"
          />


        </div>

      </>

    );
  } catch (error) {
    console.error("Error fetching data:", error);

  }
};

export default page;
