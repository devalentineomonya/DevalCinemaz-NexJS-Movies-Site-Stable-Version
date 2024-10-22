"use client";
import Image from "next/image";
import React from "react";
import HeroTrendingButtons from "./HeroTrendingButtons/HeroTrendingButtons";
import fallbackImage from "@/assets/fallbackImage.svg";
const HeroTrending = ({ setVideoPlaying, action, sliderMovie }) => {
  const movieTitle = sliderMovie.original_title || sliderMovie.name;
  const firstWord = movieTitle.split(" ")[0];
  const remainingWords = movieTitle.substring(firstWord.length).trim();

  function formatRuntime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}Min`;
  }

  const year = new Date(sliderMovie.release_date).getFullYear();
  return (
    <div className="w-full xl:h-[70vh] h-fit relative  cursor-default overflow-hidden">
      <div className="bg-gradient-to-r from-customDark via-gray-800 to-black h-full w-full absolute left-0 top-0 dark:opacity-[0.7] opacity-40"></div>
      <div className=" w-full h-full">
        <Image
          quality={100}
          width={1}
          height={1}
          src={
            `https://image.tmdb.org/t/p/original${
              sliderMovie.backdrop_path != null && sliderMovie.backdrop_path
            }` || fallbackImage
          }
          className="w-full h-full object-cover"
          alt={sliderMovie.original_title || sliderMovie.name}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        <div className=" xl:w-[40%] w-[55%] h-[70%] absolute bottom-20 xl:left-40 left-10  z-20">
          <p className="text-2xl font-bold">
            <span className="text-customGreen mr-3">TMDB</span>
            <span className="text-customWhite">Films</span>
          </p>
          <h1 className="font-extrabold text-6xl text-customWhite font-stencil m-0">
            {firstWord}
          </h1>
          <p className="font-Inter text-4xl text-customWhite font-semibold">
            {remainingWords}
          </p>

          <div className="flex flex-row gap-x-3 my-2">
            <p className="text-red-700 font-Inter text-2xl font-semibold">
              {sliderMovie?.status ?? "New"}
            </p>
            <p className="font-Inter text-2xl font-semibold text-customWhite">
              {year}
            </p>
            <p className="font-Inter text-2xl font-semibold text-customWhite">
              {sliderMovie.runtime && formatRuntime(sliderMovie.runtime)}
            </p>
            <div className="h-[40px] w-[50px] p-3 text-customWhite font-Inter font-semibold border-[1px] flex justify-center items-center rounded">
              4K
            </div>
            <div className="h-[40px] w-[50px] p-3 text-customWhite font-Inter font-semibold border-[1px] flex justify-center items-center rounded">
              {sliderMovie.vote_average.toFixed(1)}
            </div>
            <div className="h-[40px] w-[50px] p-3 text-customDark font-Inter font-semibold  flex justify-center items-center rounded bg-gray-300">
              16+
            </div>
          </div>
          <p className="text-customWhite my-2">{sliderMovie.overview}</p>
          <div className="flex items-center mt-3">
            <ul className="flex justify-center flex-row  text-customWhite text-lg font-semibold pl-5">
              {sliderMovie?.genres?.length > 0 &&
                sliderMovie.genres.map((genre) => (
                  <li className="list-disc mr-10" key={genre.id}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-3 flex flex-row ">
            <HeroTrendingButtons
              setVideoPlaying={setVideoPlaying}
              action={action}
              movieId={sliderMovie.id}
              priority
            />
          </div>
        </div>
        {action === "play" ? (
          <div className="w-72 h-96 rounded-md z-20 absolute xl:right-20 right-10 bottom-20 overflow-hidden">
            <Image
              quality={100}
              width={1}
              height={1}
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original${sliderMovie.poster_path}`}
              alt={sliderMovie.original_title || sliderMovie.name}
              priority
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HeroTrending;
