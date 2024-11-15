"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface HeroCourseCardProps {
    current:boolean
}
const HeroCarouselMiniCard:React.FC<HeroCourseCardProps> = ({current}) => {
  const [image, setImage] = useState(
    "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/11/r-06-big.webp"
  );
  const fallback =
    "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/11/r-06-big.webp";

  return (
    <Link href="">
      <Card className="rounded h-[20.625em] max-w-[273px] aspect-[1/1.1] relative">
        <CardContent>
          <Image
            onError={() => setImage(fallback)}
            src={image}
            alt="Hero carousel"
            priority
            fill
            className="absolute object-cover rounded "
            quality={100}
          />
        </CardContent>
        <CardFooter className="absolute z-10 bottom-0 flex-col items-start px-5 h-fit bg-gradient-to-t from-slate-900 to-transparent w-full py-2">
          <h5 className="font-semibold text-base">Play Away</h5>
          <p className="text-xs">Feb 2023</p>
        </CardFooter>
        <div className={cn("absolute top-0 left-0 w-full h-full", current?   " bg-black/60" : " bg-black/25")}></div>
      </Card>
    </Link>
  );
};

export default HeroCarouselMiniCard;
