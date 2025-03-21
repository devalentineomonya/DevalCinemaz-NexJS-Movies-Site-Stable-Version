"use client";

import { useState } from "react";
import { Play, Clock, ChevronLeft, ChevronRight, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

// Define types for our data
interface Episode {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
}

interface Season {
  id: number;
  number: number;
  episodes: Episode[];
}

interface ShowData {
  title: string;
  description: string;
  releaseDate: string;
  seasonCount: number;
  ranking: string;
  topRanking: number;
  backgroundImage: string;
  seasons: Season[];
}

// Sample data for the show
const showData: ShowData = {
  title: "Lost in Space",
  description:
    "After crash-landing on an alien planet, the Robinson family fights against all odds to survive and escape. But they're surrounded by hidden dangers.",
  releaseDate: "February 2025",
  seasonCount: 3,
  ranking: "#1 in Series Today",
  topRanking: 10,
  backgroundImage:
    "https://sjc.microlink.io/Fu70ji1T172NnoEgrpoyYgfPjqb913rNUrnMQ-Lg0SOsSqUQ87akX4M0tNk1ZRIbaGQhS7S5dOPqjLTMmFm8_w.jpeg",
  seasons: [
    {
      id: 1,
      number: 1,
      episodes: [
        {
          id: 101,
          title: "Impact",
          duration: "56m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
        {
          id: 102,
          title: "Diamonds in the Sky",
          duration: "49m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
        {
          id: 103,
          title: "Infestation",
          duration: "50m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
      ],
    },
    {
      id: 2,
      number: 2,
      episodes: [
        {
          id: 201,
          title: "Shipwrecked",
          duration: "48m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
        {
          id: 202,
          title: "Precipice",
          duration: "46m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
        {
          id: 203,
          title: "Echoes",
          duration: "39m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
      ],
    },
    {
      id: 3,
      number: 3,
      episodes: [
        {
          id: 301,
          title: "Legacy of the Sea",
          duration: "59m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
        {
          id: 302,
          title: "Cursed Waters",
          duration: "45m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
        {
          id: 303,
          title: "Uncharted Horizons",
          duration: "43m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
        {
          id: 304,
          title: "Betrayals and Bonding",
          duration: "41m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
        {
          id: 305,
          title: "The Final Frontier",
          duration: "52m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
        {
          id: 306,
          title: "Cosmic Reunion",
          duration: "58m",
          thumbnail: "/placeholder.svg?height=100&width=180",
        },
      ],
    },
  ],
};

const TopSeries = () => {
  const [activeTab, setActiveTab] = useState("season-3");

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative w-full h-[100vh]">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={showData.backgroundImage || "/placeholder.svg"}
            alt={showData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row h-full">
          {/* Left Side - Show Info */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            {/* Top Ranking Badge */}
            <div className="flex items-center mb-4">
              <div className="bg-black/50 border border-yellow-500 rounded p-1 flex items-center">
                <div className="bg-yellow-500 text-black font-bold px-2 py-1 rounded mr-1">
                  <span className="text-xs">Top</span>
                  <br />
                  <span className="text-sm">{showData.topRanking}</span>
                </div>
                <span className="text-white text-sm px-2">
                  {showData.ranking}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {showData.title}
            </h1>

            {/* Description */}
            <p className="text-gray-300 mb-6 max-w-2xl">
              {showData.description}
            </p>

            {/* Release Info */}
            <div className="flex items-center text-sm text-gray-400 mb-8">
              <span>{showData.releaseDate}</span>
              <span className="mx-2">•</span>
              <span>{showData.seasonCount} Seasons</span>
            </div>

            {/* Stream Button */}
            <Button className="bg-red-600 hover:bg-red-700 text-white w-40 h-12 rounded-md flex items-center justify-center gap-2">
              <Play className="h-5 w-5 fill-current" />
              Stream Now
            </Button>

            {/* Navigation Arrows */}
            <div className="flex mt-8 gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 bg-black/50"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 bg-black/50"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Side - Episodes Tabs */}
          <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center">
            <div className="w-full max-w-md bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <h2 className="font-bold text-lg">All Episodes</h2>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>

              {/* Tabs */}
              <Tabs
                defaultValue="season-3"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="w-full grid grid-cols-3 bg-transparent border-b border-gray-800">
                  {showData.seasons.map((season) => (
                    <TabsTrigger
                      key={season.id}
                      value={`season-${season.number}`}
                      className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-red-600 data-[state=active]:shadow-none rounded-none py-3"
                    >
                      Season {season.number}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Tab Content */}
                {showData.seasons.map((season) => (
                  <TabsContent
                    key={season.id}
                    value={`season-${season.number}`}
                    className="mt-0"
                  >
                    <ScrollArea className="h-[400px]">
                      <div className="divide-y divide-gray-800">
                        {season.episodes.map((episode) => (
                          <div
                            key={episode.id}
                            className="flex p-4 hover:bg-gray-800/50 transition-colors cursor-pointer"
                          >
                            <div className="w-24 h-16 relative mr-4 flex-shrink-0">
                              <Image
                                src={episode.thumbnail || "/placeholder.svg"}
                                alt={episode.title}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h3 className="font-medium">{episode.title}</h3>
                              <div className="flex items-center text-sm text-gray-400 mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{episode.duration}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default TopSeries;
