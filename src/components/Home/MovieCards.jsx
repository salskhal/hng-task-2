import React from "react";
import Imdb from "../../assets/Imdb.svg";
import Tomato from "../../assets/Tomato.svg";
import { Link } from "react-router-dom";

export default function MovieCards({ movie }) {

  const { id, poster_path, release_date, title, vote_average } = movie;

  
  return (
    <div data-testid="movie-card">
      <Link to={`/details/${id}`} className="bg-white  overflow-hidden  ">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="w-full object-cover"
          data-testid="movie-poster"
        />
        <div className="mt-3">
          <span
            className="text-gray-500 font-semibold"
            data-testid="movie-release-date"
          >
            USA, {release_date.split("-")[0]}
          </span>
          <h1 className="text-xl font-bold" data-testid="movie-title">
            {title}
          </h1>
          <div className="flex gap-5 mt-5">
            <div className="flex gap-2 items-center">
              <img src={Imdb} alt="" className="w-10" />
              <span className="text-gray-900 font-medium">
                {vote_average}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={Tomato} alt="" className="w-6" />
              <span className="text-gray-500 font-medium">
              {Math.trunc(vote_average * 10)}%
              </span>
            </div>
          </div>
          
        </div>
      </Link>
    </div>
  );
}
