"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import TextMask from "@/components/common/textmask/TextMask";
import YouTube from "react-youtube";
import { Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
}

interface TopTenCardProps {
  movie: Movie;
  index: number;
}

const TopTenCard = ({ movie, index }: TopTenCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [trailer, setTrailer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [trailerChecked, setTrailerChecked] = useState(false);
  const mounted = useRef(true);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imagePath = movie.poster_path || movie.backdrop_path;
  const imageUrl = imagePath
    ? `https://image.tmdb.org/t/p/w500${imagePath}`
    : '/placeholder.jpg';

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  const handleImageLoad = () => {
    if (!mounted.current) return;
    setImageLoaded(true);
  };

  const handleImageError = () => {
    if (!mounted.current) return;
    setImageLoaded(true); // Continue even if image fails to load
  };

  const handleMouseEnter = async () => {
    setIsHovering(true);

    if (!trailerChecked && !isLoading) {
      setIsLoading(true);
      const controller = new AbortController();

      try {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=en-US`,
          { signal: controller.signal }
        );
        const data = await response.json();

        const trailerVideo =
          data.results.find(
            (video: any) => video.type === "Trailer" && video.site === "YouTube"
          ) ||
          data.results.find(
            (video: any) => video.type === "Teaser" && video.site === "YouTube"
          );

        if (trailerVideo && mounted.current) {
          setTrailer(trailerVideo.key);
        }
      } catch (error) {
        if (error.name !== 'AbortError' && mounted.current) {
          console.error("Error fetching trailer:", error);
        }
      } finally {
        if (mounted.current) {
          setIsLoading(false);
          setTrailerChecked(true);
        }
      }
    }
  };

  return (
    <Link
      href={`/movie/${movie.id}`}
      aria-label={`View details for ${movie.title}`}
      passHref
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovering(false)}
        className="relative group/top-ten"
      >
        <Card className="w-full aspect-[1/1.3] relative group overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition-all duration-300">
          <CardContent className="p-0 relative">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-card animate-pulse">
                <div className="h-full w-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-muted-foreground animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              </div>
            )}

            {isHovering && trailer ? (
              <div className="absolute inset-0 z-10">
                <YouTube
                  videoId={trailer}
                  opts={{
                    height: "100%",
                    width: "100%",
                    playerVars: {
                      autoplay: 1,
                      controls: 0,
                      mute: 1,
                      modestbranding: 1,
                      loop: 1,
                      playlist: trailer,
                    },
                  }}
                  className="w-full h-full"
                />
              </div>
            ) : (
              <Image
                ref={imageRef}
                src={imageUrl}
                alt={movie.title}
                fill
                quality={100}
                className={`absolute object-cover h-auto transition-transform duration-300 group-hover:scale-105 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                priority={index < 3}
              />
            )}
          </CardContent>

          <div className="absolute top-2 right-2 z-20">
            <Badge
              variant="secondary"
              className="flex items-center justify-center p-1.5 bg-background/80 backdrop-blur-sm"
            >
              <Crown className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </Badge>
          </div>

          <div className="invisible group-hover:visible absolute bottom-0 h-1/3 bg-gradient-to-t from-slate-900/70 to-transparent w-full z-20">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold line-clamp-1">{movie.title}</h3>
              <p className="text-xs opacity-80">
                {new Date(movie.release_date).getFullYear()}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-primary/20 to-transparent rounded-lg transition-opacity duration-300"></div>
        </Card>

        <TextMask
          text={(index + 1).toString()}
          className="text-8xl absolute z-20 -bottom-16 right-0 transition-all group-hover/top-ten:-bottom-14 duration-500 drop-shadow-[0_5px_15px_rgba(0,0,0,0.7)]"
        />
      </motion.div>
    </Link>
  );
};

export default TopTenCard;
