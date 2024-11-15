import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroCarouselCard from "./HeroCarouselCard";
const HeroCarousel = () => {
  return (
    
    <Carousel className="max-w-96 absolute top-1/2 -right-10 -translate-x-1/2 -translate-y-1/2">
      <CarouselContent>
        <CarouselItem>
          <HeroCarouselCard />
        </CarouselItem>
        <CarouselItem>
          <HeroCarouselCard />
        </CarouselItem>
        <CarouselItem>
          <HeroCarouselCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;
