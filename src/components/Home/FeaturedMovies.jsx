import React, { useState, useEffect } from "react";
import MovieCards from "./MovieCards";

export const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63"
      )
        .then((res) => res.json())
        .then((data) => {
          const movies = data.results.slice(1, 11);
          setMovies(movies);
        
        })
        .catch((err) => console.log(err));
    };

    fetchMovies();
  }, []);
  return (
    <div className="min-h-screen px-6 md:px-16 py-16 bg-cover bg-center bg-no-repeat">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-black">Featured Movies</h1>
        <span className="text-rose flex items-center gap-3 cursor-pointer">
          See more
          <i className="fa-solid fa-chevron-right"></i>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {movies.map((movie) => (
            <MovieCards movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
