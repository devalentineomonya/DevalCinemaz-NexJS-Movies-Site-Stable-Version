"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TopTenCard from "../components/TopTenCard";
import { motion } from "framer-motion";

interface TopTenCarouselProps {
  movies: any[];
}

const TopTenCarousel = ({ movies }: TopTenCarouselProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full justify-between"
      >
        <CarouselContent className="h-[25rem]">
          {movies.map((movie, index) => (
            <CarouselItem
              key={movie.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <TopTenCard movie={movie} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-10 bg-transparent border-foreground hover:bg-primary-red-hover" />
        <CarouselNext className="right-10 bg-transparent border-foreground hover:bg-primary-red-hover" />
      </Carousel>
    </motion.div>
  );
};

export default TopTenCarousel;
