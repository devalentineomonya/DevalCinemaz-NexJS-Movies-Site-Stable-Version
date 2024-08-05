"use client";
import React, { useState } from "react";
import PersonCard from "../MovieCards/PersonCard/PersonCard";
import HeroTrending from "../../HeroTrending/HeroTrending";
import AccordionItemContainer from "../../MoviesFilter/AccordionItemContainer/AccordionItemContainer";
import ReviewCard from "../MovieCards/ReviewCard/ReviewCard";
import SmallSectionLayout from "../HomeMainLayout/SmallSectionLayout/SmallSectionLayout";
import ComingSoon from "../MovieCards/ComingSoon/ComingSoon";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import MoviesDetailSmallLayouts from "../../MoviesDetailSmallLayouts/MoviesDetailSmallLayouts";
import NewRelease from "../MovieCards/NewRelease/NewRelease";
const MediaDetailsLayout = ({
  movieInfo = [],
  videoInfo = [],
  castList ,
  movieReviews = [],
  recommendedMovies = [],
  similarMovies = [],
  upcomingMovies = [],
  type,
}) => {

  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <main className="w-full flex items-center flex-col">
      {movieInfo && (
        <HeroTrending
          setVideoPlaying={setVideoPlaying}
          action="play"
          sliderMovie={movieInfo}
        />
      )}

      <div className="w-full max-w-[1400px] flex flex-col items-center">
        <MoviesDetailSmallLayouts title={`${type} Cast List`} mt="5">
          {castList?.map((cast, i) => (
            <PersonCard width="56" key={i} cast={cast} />
          ))}
        </MoviesDetailSmallLayouts>

        {movieReviews.length > 0 && ( 
          <MoviesDetailSmallLayouts title="User reviews" mt="5">
            <AccordionItemContainer title={`${type} Review`} mt="5">
              {movieReviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </AccordionItemContainer>
          </MoviesDetailSmallLayouts>
        )}

        {recommendedMovies.length > 0 && ( 
          <MoviesDetailSmallLayouts title={`Recommended ${type}`} mt="6">
            {recommendedMovies.map((recommendedMovie, i) => (
              <NewRelease
                width="56"
                type={type}
                key={i}
                movieInfo={recommendedMovie}
              />
            ))}
          </MoviesDetailSmallLayouts>
        )}

        {similarMovies.length > 0 && ( 
          <MoviesDetailSmallLayouts title={`Similar ${type}`} mt="8">
            {similarMovies.map((similarMovie, i) => (
              <NewRelease
                width="56"
                movieInfo={similarMovie}
                key={i}
                type={type}
              />
            ))}
          </MoviesDetailSmallLayouts>
        )}
      </div>

      <SmallSectionLayout title="Coming soon">
        {upcomingMovies.slice(8, 10).map((upcomingMovie, i) => (
          <ComingSoon key={i} upcomingMovie={upcomingMovie} type={type} />
        ))}
      </SmallSectionLayout>
      {videoPlaying && (
        <VideoPlayer
          videoPlaying={videoPlaying}
          setVideoPlaying={setVideoPlaying}
          videoInfo={videoInfo}
        />
      )}
    </main>
  );
};

export default MediaDetailsLayout;
