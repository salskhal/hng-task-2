import React, { useEffect, useState } from "react";
import Imdb from "../../assets/Imdb.svg";
import Tomato from "../../assets/Tomato.svg";
import { Link } from "react-router-dom";

export default function Landing() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      fetch(
        "https://api.themoviedb.org/3/movie/615656?api_key=4e44d9029b1270a757cddc766a1bcb63"
      )
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    };

    fetchMovie();
  }, []);
  return (
    <div
      className="bg-cover bg-center h-screen "
      style={{
        backgroundImage: movie
          ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
          : "",
      }}
    >
      {movie && (
        <div className="pt-20 px-5 md:px-20 flex flex-col gap-3 justify-center h-full bg-black bg-opacity-50 text-white">
          <h1 className="text-5xl font-bold">{movie.title}</h1>
          <div className="flex gap-5 my-5 md:my-10">
            <div className="flex gap-2 items-center">
              <img src={Imdb} alt="" className="w-10" />
              <span className="text-white font-medium">
                {movie.vote_average}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={Tomato} alt="" className="w-6" />
              <span className="text-white font-medium">
                {movie.vote_average * 10}%
              </span>
            </div>
          </div>

          <p className="text-2xl font-medium md:w-1/2 ">{movie.overview}</p>
          <div className="flex gap-5 mt-5">
            <Link
              to="/details/615656"
              className="flex items-center gap-3 bg-rose text-white px-5 py-2 rounded-md font-medium"
            >
              More Info
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
