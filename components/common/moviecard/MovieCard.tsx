import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FiPlus } from "react-icons/fi";
import { IoShareSocialSharp, IoHeart } from "react-icons/io5";
import { FaPlay, FaFacebookF, FaLink, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const MovieCard = () => {
  const movie = {
    title: "Another Danger",
    duration: "2H:26min",
    imageUrl:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/u-01.webp",
  };

  return (
    <Card className=" group/card -hover:translate-y-20 relative transition-all ease-in-out duration-700 hover:z-10 hover:-m-9 hover:p-10 hover:pb-7  rounded-md box-content hover:bg-muted">
      {/* Movie Image */}
      <CardContent className="p-0 relative w-full aspect-[1/1.45]  group-hover/card:scale-105">
        <Link href="#">
          <Image
            src={movie.imageUrl}
            alt={`${movie.title} Poster`}
            priority
            fill
            className="absolute object-cover  group-hover/card:scale-110 transition-all ease-in-out duration-700 rounded-md"
            quality={100}
          />
        </Link>

        {/* Overlay Controls */}
        <div className="hidden animate-in fade-in-25 duration-500 group-hover/card:flex absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black/60 to-transparent px-4 justify-between items-center z-10">
          {/* Share and Like */}
          <div className="flex items-center gap-2 animate-in fade-in-25 slide-in-from-bottom-8 duration-500">
            {/* Share Button */}
            <div className="group/share relative border border-foreground hover:bg-primary-red-hover rounded-full p-1 cursor-pointer">
              <IoShareSocialSharp size={20} />
              <div className="hidden group-hover/share:inline-block animate-in slide-in-from-top-5 duration-500 absolute w-fit px-3 bg-background text-foreground bottom-7 -left-1/3">
                <FaFacebookF
                  className="hover:text-primary-red-hover my-3"
                  size={20}
                />
                <FaXTwitter
                  className="hover:text-primary-red-hover my-5"
                  size={20}
                />
                <FaLink
                  className="hover:text-primary-red-hover my-3"
                  size={20}
                />
              </div>
            </div>

            {/* Like Button */}
            <div className="group/like relative border border-foreground hover:bg-primary-red-hover rounded-full p-1 cursor-pointer">
              <IoHeart size={20} />
              <div className="hidden group-hover/like:grid animate-in slide-in-from-top-5 duration-500 absolute w-fit px-1 bg-background text-foreground bottom-7 -left-1/4 h-12 place-content-center">
                36+
              </div>
            </div>
          </div>

          {/* Play Button */}
          <Link
            href="#"
            className="group/play relative isolate border border-foreground bg-primary-red rounded-full p-3 cursor-pointer overflow-hidden animate-in fade-in-25 slide-in-from-bottom-8 duration-500"
          >
            <FaPlay />
            <span className="absolute left-0 top-0 h-full w-0 bg-primary-red-hover transition-all ease-in-out duration-500 group-hover/play:w-1/2 -z-10"></span>
            <span className="absolute right-0 top-0 h-full w-0 bg-primary-red-hover transition-all ease-in-out duration-500 group-hover/play:w-1/2 -z-10"></span>
          </Link>
        </div>
      </CardContent>

      {/* Footer Section */}
      <CardFooter className="mt-5 p-0 w-full hidden animate-in fade-in-25 slide-in-from-bottom-8 duration-500 group-hover/card:block">
        <article className="pt-4 flex justify-between items-center w-full">
          <div>
            <h1 className="font-medium text-xl text-foreground capitalize">
              {movie.title}
            </h1>
            <p className="text-sm font-medium mt-4">{movie.duration}</p>
          </div>
          <div className="flex items-start h-full pb-7">
            <Link href="#" className="text-sm font-medium flex items-center">
              <FiPlus />
              <span>Watchlist</span>
            </Link>
          </div>
        </article>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
