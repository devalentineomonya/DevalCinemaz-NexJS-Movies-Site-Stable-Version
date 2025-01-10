import React from "react";
import TextMask from "@/components/common/textmask/TextMask";
import { Dot } from "lucide-react";
import Image from "next/image";
import { FaStar, FaStarHalf, FaPlay } from "react-icons/fa6";
import imdb from "@/public/imdb.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SelectionCarouselMiniCard from "./SelectionCarouselMiniCard";
const SelectionCarouselLargeCard = () => {
  return (
    <Card className="h-[80vh] w-full relative overflow-x-hidden shadow-none  rounded-none border-none">
      <CardContent>
        <Image
          src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/11/viking-big.webp"
          fill
          className="object-cover"
          priority
          quality={100}
          alt="hero"
        />
        <article className=" flex items-center justify-center absolute inset-0 bg-background/50 ">
          <div className="flex items-center justify-center w-full max-w-[1650px] h-full mx-auto">

            <div className="container  max-w-[1650px]  h-full flex items-center">
              <div className="text-start max-w-[650px]">
                <div className="flex items-center gap-x-3 mb-4  fade-in-35 animate-in slide-in-from-right-14 duration-700 ">
                  <div className="px-5 py-1 bg-foreground text-primary-foreground font-semibold text-sm w-fit">
                    2 Seasons
                  </div>
                  <div className="flex items-center gap-x-1">
                    <span>Kings</span>
                    <Dot size={28} className="text-[#e50914]" />
                    <span>Drama</span>
                  </div>
                </div>
                <TextMask
                  className="text-gradient text-6xl     fade-in-35 animate-in slide-in-from-right-14 duration-700 delay-200"
                  text="Vikings"
                />

                <div className="flex items-center gap-x-3  fade-in-35 animate-in slide-in-from-right-14 duration-700 delay-700">
                  <div className="flex items-center ">
                    <FaStar size={20} className="text-yellow-400" />
                    <FaStar size={20} className="text-yellow-400" />
                    <FaStar size={20} className="text-yellow-400" />
                    <FaStarHalf size={20} className="text-yellow-400" />
                  </div>
                  <span className="text-white text-sm">4.5</span>
                  <Image src={imdb} alt="imdb" />
                  <p className="text-sm font-medium">Feb 2023</p>
                  <p className="flex items-center font-medium text-foreground text-sm">
                    <span className="text-red-500 text-sm font-normal mr-2">
                      Genres:
                    </span>{" "}
                    Fun, Hello, world
                  </p>
                </div>
                <p className="text-white text-base  mt-4 mb-8  fade-in-35 animate-in slide-in-from-right-14 duration-700 delay-500">
                  As Ragnar Lodbrok, a Norse farmer, carries out triumphant
                  raids into English territory with the help of his fellow
                  warriors, he ends up holding sway over the Vikings and
                  becoming a Scandinavian king.
                </p>
                <Button
                  variant="outline"
                  className="group isolate mt-10 py-6 px-10 border-primary-red rounded bg-primary-red border-primary-bg-primary-red hover:bg-primary-red relative
                uppercase text-base
                fade-in-35 animate-in slide-in-from-right-14 duration-700 delay-1000"
                >
                  <span
                    className="-z-10 left-0 w-[0%] group-hover:w-1/2
              text-white overflow-hidden  bg-primary-red-hover absolute h-full transition-all ease-in-out duration-500"
                  ></span>
                  <span
                    className="-z-10 bg-primary-red-hover absolute h-full w-[0%] group-hover:w-1/2
               right-0 transition-all ease-in-out duration-500"
                  ></span>
                  <span>Watch Now</span>
                  <FaPlay className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

export default SelectionCarouselLargeCard;
