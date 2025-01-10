import React from "react";
import SelectionCarouselLargeCard from "../components/SelectionCarouselLargeCard";
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/ui/dual-carousel";

const TopSelection = () => {
  return (
    <section className="h-[80vh] flex items-center justify-center  w-full relative overflow-x-hidden mt-20">
      <Carousel  orientation="vertical" className="flex items-center gap-2 w-full max-w-[1650px]">
        <div className="relative flex-grow basis-3/4  w-full">
          <CarouselMainContainer className="h-[80vh] w-full">
            {Array.from({ length: 10 }).map((_, index) => (
              <SliderMainItem
                key={index}
                className="border border-muted flex items-center justify-center h-64 "
              >
                <SelectionCarouselLargeCard />
              </SliderMainItem>
            ))}
          </CarouselMainContainer>
        </div>
        <CarouselThumbsContainer className="h-[80vh] basis-1/4 flex items-center justify-center">
          {Array.from({ length: 10 }).map((_, index) => (
            <SliderThumbItem
              key={index}
              index={index}
              className="rounded-md bg-transparent"
            >
              <span
                className="border border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background"
              >
                Slide {index + 1}
              </span>
            </SliderThumbItem>
          ))}
        </CarouselThumbsContainer>
      </Carousel>
    </section>
  );
};

export default TopSelection;
