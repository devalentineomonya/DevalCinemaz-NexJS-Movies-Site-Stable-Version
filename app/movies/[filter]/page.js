import MediaContainer from '@/components/MediaContainer/MediaContainer';
import { getMediaPerCategory } from '@/app/Api/api';
import NotFound from '../not-found';
import DisplayError from '@/components/common/DisplayError/DisplayError';

const page = async ({ params, searchParams }) => {
  const routeFilter = (params.filter).toString().replaceAll("-", "_");

  const pageNumber = parseInt(searchParams.page) || 1;
  const validPageNumber = () => {
    if (searchParams) {
      if (!isNaN(pageNumber) || !pageNumber < 1) {
        return pageNumber

      } else {
        return 1
      }
    } else {
      return 1
    }
  }

  const possibleRoutes = ["now_playing", "upcoming", "popular", "top_rated"];

  if (!possibleRoutes.includes(routeFilter)) {
    return <NotFound />;
  }

  try {
    const movieData = await Promise.all([
      getMediaPerCategory(routeFilter, "movie", validPageNumber() || 1),
    ]);
    const [moviesList] = movieData;

    return (
      <>
        <MediaContainer mediaType="movies" mediaList={moviesList} routeFilter={routeFilter} pageNumber={pageNumber} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data at MOvies filter", "\n=> Message: ", error.message, "\n=> Cause: ", error.cause);
    return(<DisplayError message={error.message}/>)
  }
};

export default page;
