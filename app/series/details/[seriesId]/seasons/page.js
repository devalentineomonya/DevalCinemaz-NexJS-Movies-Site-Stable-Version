import SeasonBanner from '@/components/SeasonBanner/SeasonBanner'
import SeriesNavbar from '@/components/SeriesNavbar/SeriesNavbar'
import SeriesSeasonsContainer from '@/components/SeriesSeasonsContainer/SeriesSeasonsContainer'
import { getInfo } from '@/app/Api/api'
import NotFound from '@/app/movies/not-found'
import DisplayError from '@/components/common/DisplayError/DisplayError'


const page = async ({ params }) => {
  const seriesId = parseInt(params.seriesId);

  if (isNaN(seriesId)) {
    return <NotFound />
  }

  try {
    const seriesData = await getInfo(seriesId, "tv")
    return (
      <div className='dark:bg-customDark bg-customWhite'>
        <SeriesNavbar pt="[65px]" h="[115px]" />
        <SeasonBanner seriesData={seriesData} />
        <SeriesSeasonsContainer seriesData={seriesData} seriesId={seriesId}/>
      </div>
    )
  } catch (error) {
    console.error("Error fetching data at Series Details SeriesId Season", "\n=> Message: ", error.message, "\n=> Cause: ", error.cause);
    return(<DisplayError message={error.message}/>)

  }
}
export default page
