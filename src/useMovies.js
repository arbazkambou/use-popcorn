import { useState, useEffect } from "react";
const api = "c21b61a4";
export function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(
    function () {
      //handleBackClick();
      const controller = new AbortController();
      setIsError(false);
      async function fetchMovieData() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=${api}`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("Movie not found!");
          }
          setIsError(false);
          setMovies(() => data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            setIsError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setIsError("Search Something...");
        setMovies([]);
        return;
      }
      fetchMovieData();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, isError };
}
