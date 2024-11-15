import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HeroCarouselLargeCard from "../components/HeroCarouselLargeCard";
import HeroCarouselMini from "../components/HeroCarouselMini";
const Hero = async () => {
  return (
    <section className="relative overflow-x-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <HeroCarouselLargeCard />
          </CarouselItem>
          <CarouselItem>
            <HeroCarouselLargeCard />
          </CarouselItem>
          <CarouselItem>
            <HeroCarouselLargeCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <HeroCarouselMini />
    </section>
  );
};

export default Hero;
