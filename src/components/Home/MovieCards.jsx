import React from "react";
import { Link } from "react-router-dom";

export default function MovieCards({ movie }) {
  return (
    <div data-testid="movie-card">
      <Link to={`/details/${movie.id}`} className="bg-white  overflow-hidden  ">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
          className="w-full object-cover"
          data-testid="movie-poster"
        />
        <div className="mt-3">
          <span
            className="text-gray-500 font-semibold"
            data-testid="movie-release-date"
          >
            USA, {movie.release_date.split("-")[0]}
          </span>
          <h1 className="text-xl font-bold" data-testid="movie-title">
            {movie.title}
          </h1>

          <div className="flex justify-between items-center mt-5">
            <span className="text-rose font-medium">{movie.vote_average}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
