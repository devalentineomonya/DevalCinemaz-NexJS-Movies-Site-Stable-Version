import TextMask from "@/components/common/textmask/TextMask";
import { getImgBlurData } from "@/utils/blurDataURL";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalf, FaPlay } from "react-icons/fa6";
import imdb from "@/public/imdb.svg";
import { Button } from "@/components/ui/button";
import HeroCarousel from "../components/HeroCarousel";
const Hero = async () => {
  const base64 = await getImgBlurData(
    "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/11/viking-big.webp"
  );
  return (
    <section className="h-screen relative">
      <Image
        blurDataURL={base64}
        src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/11/viking-big.webp"
        fill
        className="object-cover"
        priority
        placeholder="blur"
        quality={100}
        alt="hero"
      />
      <div className="flex items-center justify-center absolute inset-0 bg-background/50">
        <div className="container  max-w-[1650px]  h-full flex items-center">
          <div className="text-start max-w-[650px]">
            <div className="flex items-center gap-x-3 mb-4">
              <div className="px-5 py-1 bg-foreground text-primary-foreground font-semibold text-sm w-fit">
                2 Seasons
              </div>
              <div className="flex items-center gap-x-1">
                <span>Kings</span>
                <Dot size={28} className="text-[#e50914]" />
                <span>Drama</span>
              </div>
            </div>
            <TextMask className="text-gradient text-6xl" text="Vikings" />

            <p className="text-white text-base  mt-4 mb-8">
              As Ragnar Lodbrok, a Norse farmer, carries out triumphant raids
              into English territory with the help of his fellow warriors, he
              ends up holding sway over the Vikings and becoming a Scandinavian
              king.
            </p>
            <div className="flex items-center gap-x-3">
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
            <Button
              variant="outline"
              className="mt-10 py-6 px-10 rounded bg-[#e50914] border-[#e50914] hover:bg-[#e50914] group
               before:w-[0%] group-hover:before:w-1/2 before:left-0 before:content-['']
                text-white relative overflow-hidden isolate before:bg-[#e50914] before:absolute before:h-full
                after:-z-10 after:bg-[#e50914] after:absolute after:h-full after:w-[0%] group-hover:after:w-1/2
                 after:right-0 after:content-[''] before:-z-10 uppercase text-base"
            >
              <span>Watch Now</span>
              <FaPlay className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      <HeroCarousel/>
    </section>
  );
};

export default Hero;
