import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const SelectionCarouselMiniCard = () => {
  return (
    <Card className="aspect-video">
      <CardContent className="flex flex-col items-center justify-center relative h-full" >
        <Image
          src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/11/viking-big.webp"
          fill
          className="object-cover absolute"
          priority
          quality={100}
          alt="hero"
        />
      </CardContent>
    </Card>
  );
};

export default SelectionCarouselMiniCard;
