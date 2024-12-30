import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import SelectionCarouselLargeCard from "../components/SelectionCarouselLargeCard";
const TopSelection = () => {
  return (

      <section className="h-[90vh] bg-green-400 w-full relative overflow-x-hidden mt-20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <SelectionCarouselLargeCard />
            </CarouselItem>
            <CarouselItem>
              <SelectionCarouselLargeCard />
            </CarouselItem>
            <CarouselItem>
              <SelectionCarouselLargeCard />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        {/* <HeroCarouselMini /> */}
      </section>

  );
};

export default TopSelection;
