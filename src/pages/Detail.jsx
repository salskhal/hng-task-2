import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

export default function Detail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {

      try {
        
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=4e44d9029b1270a757cddc766a1bcb63`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie detail: ", error);
      } finally {
        // wait 2 seconds to simulate loading
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-blue-950 pt-40 px-20 relative z-[-1]">
        <div className="h-[60vh] bg-gray-200 rounded-md mb-20"></div>
        <div className="grid grid-cols-2 gap-10 text-white relative">
          <div
            className=" bg-gray-200 rounded-md mb-20"
            style={{ minHeight: "300px" }}
          ></div>
          <div>
            <div
              className="text-5xl font-bold bg-gray-200 mb-4"
              style={{ width: "80%", height: "1.5em" }}
            ></div>
            <div
              className="bg-gray-200 mb-4"
              style={{ width: "60%", height: "1em" }}
            ></div>
            <div className="flex flex-col gap-2 mt-5">
              <div
                className="text-gray-header font-medium bg-gray-200"
                style={{ width: "40%", height: "1em" }}
              ></div>
              <div
                className="text-gray-paragraph font-semibold text-xl bg-gray-200"
                style={{ width: "60%", height: "1em" }}
              ></div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div
                className="text-gray-header font-medium bg-gray-200"
                style={{ width: "40%", height: "1em" }}
              ></div>
              <div
                className="text-gray-paragraph font-semibold text-xl bg-gray-200"
                style={{ width: "60%", height: "1em" }}
              ></div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div
                className="text-gray-header font-medium bg-gray-200"
                style={{ width: "40%", height: "1em" }}
              ></div>
              <div
                className="text-gray-paragraph font-semibold text-xl bg-gray-200"
                style={{ width: "60%", height: "1em" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="min-h-screen bg-blue-950 pt-40 px-20 relative z-[-1]">
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat rounded-md overflow-hidden relative mb-20"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className="pt-20  px-20 flex flex-col gap-3 justify-center h-full bg-black bg-opacity-50"></div>
      </div>
      <div className=" grid grid-cols-2 gap-10  text-white relative px-10">
        <div className=" bg-cover bg-center bg-no-repeat rounded-md overflow-hidden relative mb-20">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
            className="w-full object-fill rounded-md"
          />
        </div>
        <div
          className="
          flex
          flex-col
          gap-2
          mt-5
          relative

          "
        >
          <h1 className="text-5xl font-bold">{movie.title}</h1>
          <p className="t text-xl font-semibold text-gray-300">{movie.overview}</p>
          <div className="flex flex-col">
            <span className="text-gray-header font-medium">Type</span>
            <span className="text-gray-paragraph font-semibold text-xl">
              Movie
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <span className="text-gray-header font-medium">Release Date</span>
            <span className="text-gray-paragraph font-semibold text-xl">
              {movie.release_date}
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <span className="text-gray-header font-medium">Runtime</span>
            <span className="text-gray-paragraph font-semibold text-xl">
              {movie.runtime} minutes
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <span className="text-gray-header font-medium">Genres</span>
            <span className="text-gray-paragraph font-semibold text-xl">
              {movie.genres.map((genre) => genre.name).join(", ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
