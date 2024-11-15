import TextMask from "@/components/common/textmask/TextMask";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopTenCard = () => {
  return (
    <Link href="">
      <Card className="w-full aspect-[1/1.3] relative group">
        <CardContent>
          <Image
            src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-04.webp"
            alt="Top 10 Card"
            fill
            quality={100}
            className="absolute object-cover h-auto bg-blend-overlay"
          />
        </CardContent>
        <div className="invisible group-hover:visible absolute bottom-0 h-1/3 bg-gradient-to-t from-slate-900/70 to-transparent w-full"></div>
        <TextMask
          text="10"
          className="text-8xl absolute z-10 -bottom-16 right-0 transition-all group-hover:-bottom-14 duration-500"
        />
      </Card>
    </Link>
  );
};

export default TopTenCard;
