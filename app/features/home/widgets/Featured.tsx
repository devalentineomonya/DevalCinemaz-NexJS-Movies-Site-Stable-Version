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
    <SectionLayout title="Only on DevalCinemaz" className="max-h-96">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
          <CarouselItem className="pl-7 basis-1/6">
            {" "}
            <MovieCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-10 bg-transparent border-foreground hover:bg-primary-red-hover" />
        <CarouselNext className="right-10 bg-transparent border-foreground hover:bg-primary-red-hover" />
      </Carousel>
    </SectionLayout>
  );
};

export default Featured;
