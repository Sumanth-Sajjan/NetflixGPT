import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-40 relative z-20">
          <MovieList
            title={"Trending Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Top-Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular movies"} movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
}
