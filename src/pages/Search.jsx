import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MovieCards from "../components/Home/MovieCards";

export default function Search() {
  const { searchId } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setIsLoading(true )
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${searchId}&page=1&include_adult=false`
        );
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error("Failed to fetch search results: ", error);
      } finally {
        // wait 1 seconds to simulate loading
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchSearchResults();
  }, [searchId]);

  return (
    <div className="min-h-screen bg-blue-950 pt-40 px-20">
      <h1 className="text-white text-4xl font-bold">
        Search Results for: <span className="underline">{searchId}</span>
      </h1>
      {isLoading ? (
        <Loader />
      ) : searchResults.length === 0 ? (
        <div className="text-center mt-10 text-white">
          <h1
            className="text-4xl font-bold"
          >Sorry, No results found</h1>
          <p
            className="text-xl font-semibold mt-5"
          >
            There are no movies or TV shows matching your search terms. You can
            suggest me manually
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-10 text-white mt-20">
          {searchResults.map((movie) => (
            <MovieCards movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
