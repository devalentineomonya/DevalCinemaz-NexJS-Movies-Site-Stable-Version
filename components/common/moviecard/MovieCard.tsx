"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import YouTube from "react-youtube";
import { Star, Clock, Calendar, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import MovieLoading from "./MovieLoading";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  overview: string;
  genres: { id: number; name: string }[];
}

interface VideoResult {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

interface VideoResponse {
  results: VideoResult[];
}

interface MovieCardProps {
  movieId: number;
  apiKey: string;
}

export default function MovieCard({ movieId, apiKey }: MovieCardProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [trailer, setTrailer] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    rest: { scale: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3 } },
  };

  const badgeVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const trailerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setIsLoading(true);

        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
        );
        const movieData = await movieResponse.json();

        const videosResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
        );
        const videosData: VideoResponse = await videosResponse.json();

        const trailerVideo =
          videosData.results.find(
            (video) => video.type === "Trailer" && video.site === "YouTube"
          ) ||
          videosData.results.find(
            (video) => video.type === "Teaser" && video.site === "YouTube"
          );

        setMovie(movieData);
        setTrailer(trailerVideo?.key || null);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId && apiKey) {
      fetchMovieData();
    }
  }, [movieId, apiKey]);

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return <MovieLoading />;
  }

  if (!movie) {
    return (
      <Card className="w-full max-w-md mx-auto bg-card text-card-foreground">
        <CardContent className="p-4">
          <p>Movie not found</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="w-full max-w-md mx-auto"
      whileHover="hover"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Card className="overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 h-[450px] flex flex-col">
        <motion.div className="relative h-64 w-full" variants={imageVariants}>
          <motion.div
            className="absolute inset-0 z-10"
            variants={trailerVariants}
            animate={isHovering && trailer ? "visible" : "hidden"}
          >
            {trailer && (
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
            )}
          </motion.div>

          <motion.div
            variants={trailerVariants}
            animate={!isHovering || !trailer ? "visible" : "hidden"}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${
                movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Rating badge */}
          <motion.div
            className="absolute top-2 right-2 z-20"
            variants={badgeVariants}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Badge
              variant="secondary"
              className="flex items-center gap-1 bg-background/80 backdrop-blur-sm"
            >
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              {movie.vote_average.toFixed(1)}
            </Badge>
          </motion.div>

          {/* Premium badge */}
          <motion.div
            className="absolute top-2 left-2 z-20"
            variants={badgeVariants}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <Badge
              variant="secondary"
              className="flex items-center justify-center p-1.5 bg-background/80 backdrop-blur-sm"
            >
              <Crown className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </Badge>
          </motion.div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={contentVariants}
        >
          <CardContent className="p-4 flex-grow flex flex-col">
            <motion.h2
              className="text-xl font-bold mb-2 line-clamp-1"
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {movie.title}
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-2 mb-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {movie.genres.slice(0, 3).map((genre) => (
                <motion.div
                  key={genre.id}
                  variants={{
                    hidden: { opacity: 0, y: 5 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Badge variant="outline" className="text-xs">
                    {genre.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-sm text-muted-foreground mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {movie.release_date && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(movie.release_date)}
                </div>
              )}
              {movie.runtime > 0 && (
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formatRuntime(movie.runtime)}
                </div>
              )}
            </motion.div>

            <motion.p
              className="text-sm line-clamp-3 text-muted-foreground flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {movie.overview}
            </motion.p>
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  );
}
