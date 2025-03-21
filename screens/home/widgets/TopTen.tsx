import SectionLayout from "@/components/layouts/SectionLayout";
import { fetchTopTenMovies } from "@/app/actions/top-ten";
import TopTenCarousel from "./TopTenCarousel";

const TopTen = async () => {
  const { movies, error } = await fetchTopTenMovies();

  if (error || !movies || movies.length === 0) {
    return (
      <SectionLayout title="Top 10 Movies To Watch">
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {error || "No movies found. Please try again later."}
          </p>
        </div>
      </SectionLayout>
    );
  }

  return (
    <SectionLayout title="Top 10 Movies To Watch">
      <TopTenCarousel movies={movies} />
    </SectionLayout>
  );
};

export default TopTen;
