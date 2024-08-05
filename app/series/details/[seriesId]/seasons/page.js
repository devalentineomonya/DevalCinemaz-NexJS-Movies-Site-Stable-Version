import SeasonBanner from '@/components/SeasonBanner/SeasonBanner'
import SeriesNavbar from '@/components/SeriesNavbar/SeriesNavbar'
import SeriesSeasonsContainer from '@/components/SeriesSeasonsContainer/SeriesSeasonsContainer'
import { getInfo } from '@/app/Api/api'
import NotFound from '@/app/movies/not-found'


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
    console.error("Error fetching data:", error);

  }
}
export default page
