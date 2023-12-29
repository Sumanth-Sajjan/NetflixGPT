import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default MovieList;
