"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import HeroCarouselMiniCard from "./HeroCarouselMiniCard";
import { useEffect, useState } from "react";

const HeroCarouselMini = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="max-w-[40em] bg-gradient-to-r from-background to-transparent pl-7 pt-7 pb-6 absolute top-1/2 -right-24 -translate-y-1/2"
      setApi={setApi}
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2">
            <div className="p-1">
              <HeroCarouselMiniCard current={current === index} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-10">
        <CarouselPrevious className="static mr-3" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
};

export default HeroCarouselMini;
