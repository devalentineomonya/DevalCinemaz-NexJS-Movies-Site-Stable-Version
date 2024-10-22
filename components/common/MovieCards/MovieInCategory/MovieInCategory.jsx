"use client";
import Image from "next/image";
import React, { useState } from "react";
import fallbackImage from "@/assets/fallbackImage.svg";
import Link from "next/link";
const MovieInCategory = ({ seriesAiringTodayInfo, mediaType, width = 72 }) => {
  const [image, setImage] = useState(
    `https://image.tmdb.org/t/p/original${
      (seriesAiringTodayInfo?.poster_path != null &&
        seriesAiringTodayInfo.poster_path) ||
      fallbackImage
    }`
  );

  return (
    <div
      className={` h-[420px] w-${width} rounded-md overflow-hidden dark:bg-gray-950 bg-slate-200 flex flex-col flex-shrink-0 relative`}
    >
      <div className="h-[85%] relative">
        <Link
          href={`/${mediaType.toLowerCase()}/details/${
            seriesAiringTodayInfo?.id
          }`}
        >
          <Image
            quality={100}
            width={1}
            height={1}
            src={typeof image !== "string" ? image.src : image}
            className="absolute w-full h-full object-cover z-0"
            alt={
              seriesAiringTodayInfo?.original_title ||
              seriesAiringTodayInfo?.name
            }
            onError={() => setImage(fallbackImage)}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Link>
      </div>
      <Link
     
        href={`/${mediaType.toLowerCase()}/details/${
          seriesAiringTodayInfo?.id
        }`}
      >
        <div className="flex justify-center items-center flex-col cursor-pointer z-10 bg-gradient-to-t from-slate-900 to-slate-500 bg-opacity-30 absolute bottom-0 h-1/4 w-full">
          <p className="dark:text-customWhite text-customDark font-Inter font-semibold text-md mt-2">
            {seriesAiringTodayInfo?.original_title ??
              seriesAiringTodayInfo?.name}
          </p>
          <p className="dark:text-customWhite text-customDark font-Inter font-semibold text-md mt-2 capitalize">
            {`${mediaType} ${
              seriesAiringTodayInfo.adult ? "for Adults" : "for All"
            }`}
          </p>
          <p className="dark:text-customWhite text-customDark font-Inter font-semibold text-md">
            {new Date(seriesAiringTodayInfo?.first_air_date).getFullYear()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieInCategory;
