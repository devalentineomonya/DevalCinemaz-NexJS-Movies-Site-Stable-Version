"use client";

import * as React from "react";
import { Film, Tv, Star } from "lucide-react";
import { IoSearchSharp } from "react-icons/io5";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Image from "next/image";

interface Movie {
  id: number;
  name: string;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
  media_type?: string;
}

const NavbarDesktopSearch = () => {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<Movie[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    const searchMovies = async () => {
      if (searchQuery.length < 2) {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=3e12a9e1c3ebd01206ffb0d12cb0a1f1&query=${encodeURIComponent(
            searchQuery
          )}&page=1`
        );
        const data = await response.json();

        // Filter to only include movies and TV shows
        const filteredResults = data.results
          .filter(
            (item: (typeof data.results)[0]) =>
              item.media_type === "movie" || item.media_type === "tv"
          )
          .slice(0, 5);

        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error searching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimeout = setTimeout(() => {
      if (searchQuery) {
        searchMovies();
      }
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  return (
    <>
      <p
        className="text-sm flex items-center gap-1 cursor-pointer text-foreground"
        onClick={() => setOpen((prev) => !prev)}
      >
        <IoSearchSharp size={20} />
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search movies and TV shows..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          {isLoading ? (
            <div>Searching movies and TV shows...</div>
          ) : searchQuery.length > 0 && searchResults.length === 0 ? (
            <CommandEmpty>No results found.</CommandEmpty>
          ) : (
            <CommandGroup heading="Search Results">
              {searchResults.map((result) => (
                <CommandItem
                  key={result.id}
                  onSelect={() => {
                    setOpen(false);
                    // In a real app, you would navigate to the movie/show page
                  }}
                  className="flex items-center gap-2 py-2"
                >
                  {result.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w92${result.poster_path}`}
                      alt={result.title || "Movie poster"}
                      width={40}
                      height={60}
                      className="rounded object-cover"
                    />
                  ) : (
                    <div className="w-10 h-[60px] bg-muted flex items-center justify-center rounded">
                      <Film className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {result.title || result.name}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      {result.media_type === "movie" ? (
                        <Film className="h-3 w-3 mr-1" />
                      ) : (
                        <Tv className="h-3 w-3 mr-1" />
                      )}
                      <span>
                        {result.media_type === "movie" ? "Movie" : "TV Show"} •
                      </span>
                      <Star className="h-3 w-3 mx-1 text-yellow-500" />
                      <span>{result.vote_average?.toFixed(1)}</span>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default NavbarDesktopSearch;
