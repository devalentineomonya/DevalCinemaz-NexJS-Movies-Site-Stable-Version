"use server"

interface MovieResult {
  id: number
  title: string
  poster_path: string
  backdrop_path: string
  vote_average: number
  release_date: string
  overview: string
  genre_ids: number[]
}

interface TMDBResponse {
  page: number
  results: MovieResult[]
  total_pages: number
  total_results: number
}

/**
 * Fetches top 10 movies from random pages of TMDB's top rated movies
 */
export async function fetchTopTenMovies() {
  try {
    const apiKey = process.env.TMDB_API_KEY

    if (!apiKey) {
      throw new Error("TMDB API key is not defined")
    }

    const totalPagesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    )
    const totalPagesData: TMDBResponse = await totalPagesResponse.json()
    const maxPages = Math.min(totalPagesData.total_pages, 20)

    // Generate 3 random page numbers
    const randomPages = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * maxPages) + 1
    )

    // Fetch movies from random pages
    const pagesPromises = randomPages.map(page =>
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`,
        { next: { revalidate: 3600 } } // Cache for 1 hour
      ).then(res => res.json())
    )

    const pagesResults = await Promise.all(pagesPromises)

    // Combine results and shuffle them
    let allMovies: MovieResult[] = []
    pagesResults.forEach((pageData: TMDBResponse) => {
      allMovies = [...allMovies, ...pageData.results]
    })

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = allMovies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[allMovies[i], allMovies[j]] = [allMovies[j], allMovies[i]]
    }

    // Take the first 10 movies
    const topTenMovies = allMovies.slice(0, 10)

    // Removed revalidatePath call that was causing the error

    return { movies: topTenMovies }
  } catch (error) {
    console.error("Error fetching top ten movies:", error)
    return { error: "Failed to fetch top movies", movies: [] }
  }
}

/**
 * Separate function to manually trigger revalidation
 * This should only be called from user actions, not during rendering
 */
export async function refreshTopTenMovies() {
  "use server"
  const { revalidatePath } = await import("next/cache")
  revalidatePath("/")
  return { success: true }
}
