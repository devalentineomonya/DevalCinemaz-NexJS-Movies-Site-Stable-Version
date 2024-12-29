import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TopTenCard from "../components/TopTenCard";
import SectionLayout from "@/components/layouts/SectionLayout";
const TopTen = () => {
  return (
    <SectionLayout title="Top 10 Movies To Watch">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full  justify-between"
      >
        <CarouselContent className="h-[24rem]">
          <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 ">
            <TopTenCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
            <TopTenCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
            <TopTenCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
            <TopTenCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
            <TopTenCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
            <TopTenCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
            <TopTenCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
            <TopTenCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
            <TopTenCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
            <TopTenCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-10 bg-transparent border-foreground hover:bg-primary-red-hover" />
        <CarouselNext className="right-10 bg-transparent border-foreground hover:bg-primary-red-hover" />
      </Carousel>
    </SectionLayout>
  );
};

export default TopTen;
