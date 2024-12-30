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
const Upcomming = () => {
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
        title="Upcoming Movies"
        className=" justify-center max-h-[450px]"
      >
        <CarouselContent className="transition-all ease-in-out duration-500 hover:h-[550px] flex items-center">

          {Array(10)
          .fill(0)
          .map((_, index) => (
            <CarouselItem key={index} className="basis-1/6">
              <MovieCard />
            </CarouselItem>
          ))}

        </CarouselContent>
      </SectionLayout>
    </Carousel>
  );
};

export default Upcomming;
