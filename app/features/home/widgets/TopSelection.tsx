"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const movies = [
  {
    id: 1,
    title: "Kali",
    category: "Action",
    rating: 4,
    duration: "2h:10m",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/lost-inst-space.webp",
    thumbnail:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/lost-inst-space.webp",
    description:
      "A powerful warrior goddess fights to restore balance in a world torn apart by chaos and destruction. Her journey takes her through ancient battlefields where she must confront enemies both mortal and divine.",
  },
  {
    id: 2,
    title: "Joker",
    category: "Mystery",
    rating: 3,
    duration: "2h:45m",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/lost-inst-space.webp",
    thumbnail:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/lost-inst-space.webp",
    description:
      "In the heart of a dark and chaotic city, Joker tells the chilling story of Arthur Fleck, a struggling street performer with dreams of bringing joy to a world that only shows him cruelty. As society pushes him to the brink, Arthur's fragile grip on reality begins to slip, transforming him into the infamous criminal mastermind.",
  },
  {
    id: 3,
    title: "Deadpool",
    category: "Action Comedy",
    rating: 4,
    duration: "2h:14m",

    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/lost-inst-space.webp",
    thumbnail:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/lost-inst-space.webp",
    description:
      "Wade Wilson, a former special forces operative, adopts the alter ego Deadpool after a rogue experiment leaves him with accelerated healing powers. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
  },
];

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(movies[1]); // Default to Joker
  const [key, setKey] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const handleMovieChange = (movie: (typeof movies)[0], index: number) => {
    if (selectedMovie.id === movie.id) return;

    if (api) {
      api.scrollTo(index);
    }

    setTimeout(() => {
      setSelectedMovie(movie);
      setKey((prev) => prev + 1);
    }, 300);
  };

  useEffect(() => {
    if (!api) return;

    const selectedIndex = movies.findIndex(
      (movie) => movie.id === selectedMovie.id
    );

    if (selectedIndex !== -1) {
      api.scrollTo(selectedIndex);
    }

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setSelectedMovie(movies[selectedIndex]);
      setKey((prev) => prev + 1);
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, selectedMovie.id]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="relative w-full h-[80dvh] flex">
        <motion.div
          key={`bg-${selectedMovie.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
        >
          <Image
            src={selectedMovie.image}
            fill
            className="object-cover w-full h-full absolute"
            alt={selectedMovie.title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 flex w-full h-full">
          <div className="w-1/4 h-full flex flex-col justify-center relative">
            <button
              className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-black/20 hover:bg-black/80 rounded-full p-2 transition-all"
              onClick={() =>
                document
                  .querySelector(".embla__prev")
                  ?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
              }
            >
              <ChevronUp className="h-6 w-6" />
            </button>

            <Carousel
              orientation="vertical"
              className="h-[calc(100%-120px)] my-16"
              opts={{
                align: "center",
                loop: true,
              }}
              setApi={setApi}
            >
              <CarouselContent className="h-full py-4">
                {movies.map((movie, index) => (
                  <CarouselItem key={movie.id} className="pt-2 pb-2 h-1/3">
                    <motion.div
                      className={`relative cursor-pointer transition-all duration-300 h-full ${
                        selectedMovie.id === movie.id
                          ? "scale-105"
                          : "opacity-70 hover:opacity-100"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleMovieChange(movie, index)}
                    >
                      <Card className="border-0 bg-transparent overflow-hidden h-full">
                        <CardContent className="p-0 h-full">
                          <div className="relative h-full">
                            <Image
                              width={100}
                              height={100}
                              quality={100}
                              src={movie.thumbnail || "/placeholder.svg"}
                              alt={movie.title}
                              className="w-full h-full object-cover rounded-md aspect-video"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                              <h3 className="text-white font-bold">
                                {movie.title}
                              </h3>
                              <p className="text-xs text-gray-300">
                                {movie.duration}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      {/* Red underline for active item */}
                      {selectedMovie.id === movie.id && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"
                          layoutId="activeIndicator"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        ></motion.div>
                      )}
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="hidden">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>

            <button
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all"
              onClick={() =>
                document
                  .querySelector(".embla__next")
                  ?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
              }
            >
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>

          <div className="w-3/4 h-full flex flex-col justify-center pl-8 pr-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  className="text-sm text-gray-400"
                >
                  {selectedMovie.category}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-6xl font-bold"
                >
                  {selectedMovie.title.toLowerCase()}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">
                        {i < selectedMovie.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                    IMDb
                  </span>
                  <span className="text-gray-300">
                    {selectedMovie.duration}
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-gray-300 max-w-3xl line-clamp-4"
                >
                  {selectedMovie.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-40 h-12 rounded-md flex items-center justify-center gap-2 mt-4">
                    <Play className="h-5 w-5 fill-current" />
                    Play Now
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
