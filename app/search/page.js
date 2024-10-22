export const dynamic = 'force-dynamic'
import DisplayError from '@/components/common/DisplayError/DisplayError'
import { getSearchResult } from '../Api/api'
import SearchContainer from '@/components/SearchContainer/SearchContainer'

export default async function page({ searchParams }) {
    try {
        const searchQuery = searchParams.query
        const searchResults = await Promise.all([
            getSearchResult(searchQuery, "tv"),
            getSearchResult(searchQuery, "person"),
            getSearchResult(searchQuery, "movie"),
            getSearchResult(searchQuery, "keyword"),
            getSearchResult(searchQuery, "company"),
        ])
        const [seriesResults, peopleResults, moviesResults, keyWordsResults, companyResults] = searchResults
       
        return (
            <SearchContainer seriesResults={seriesResults} peopleResults={peopleResults} moviesResults={moviesResults} companyResults={companyResults} keyWordsResults={keyWordsResults} />
        )

    } catch (error) {
        console.error("Error fetching data at Search ", "\n=> Message: ", error.message, "\n=> Cause: ", error.cause);
        return(<DisplayError message={error.message}/>)

    }
}
