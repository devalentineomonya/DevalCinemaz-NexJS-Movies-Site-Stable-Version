import MediaContainer from '@/components/MediaContainer/MediaContainer';
import { getMediaPerCategory } from '@/app/Api/api';
import DisplayError from '@/components/common/DisplayError/DisplayError';


const page = async ({searchParams }) => {


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

  try {
    const movieData = await Promise.all([
      getMediaPerCategory("popular", "tv",validPageNumber() || 1),
    ]);
    const [seriesList] = movieData;

    return (
      <>
        <MediaContainer mediaList={seriesList} mediaType="series" routeFilter="popular" pageNumber={pageNumber} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data at Series", "\n=> Message: ", error.message, "\n=> Cause: ", error.cause);
    return(<DisplayError message={error.message}/>)
  }
};

export default page;
