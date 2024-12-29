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
          <CarouselNext className="static bg-transparent border-foreground hover:bg-primary-red-hover" />
        }
        prevButton={
          <CarouselPrevious className="static bg-transparent border-foreground hover:bg-primary-red-hover" />
        }
        title="Only on DevalCinemaz"
        className=" bg-green-400 justify-center max-h-[450px]"
      >
        <CarouselContent className="transition-all ease-in-out duration-500 hover:h-[700px] bg-red-400 flex items-center">
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
        </CarouselContent>
      </SectionLayout>
    </Carousel>
  );
};

export default Featured;
