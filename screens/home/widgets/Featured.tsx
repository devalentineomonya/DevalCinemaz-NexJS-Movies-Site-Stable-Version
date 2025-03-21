import MovieCard from "@/components/common/moviecard/MovieCard";
import SectionLayout from "@/components/layouts/SectionLayout";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Featured = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <SectionLayout
        nextButton={
          <CarouselNext className="static bg-transparent border-foreground" />
        }
        prevButton={
          <CarouselPrevious className="static bg-transparent border-foreground" />
        }
        title="Only on DevalCinemaz"
        className=" justify-center "
      >
        <CarouselContent className="transition-all ease-in-out duration-500 flex items-center">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <MovieCard
                  apiKey={process.env.NEXT_PUBLIC_TMDB_API_KEY!}
                  movieId={857}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </SectionLayout>
    </Carousel>
  );
};

export default Featured;
