import { useEffect, useState } from "react";

import AppLayout from "./components/AppLayout";
import BoxList from "./components/BoxList";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import Summary from "./components/Summary";
import MovieListWatched from "./components/MovieListWatched";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";

import API_KEY from "./env/auth-key";

export default function App() {
  const [movies, setMovies] = useState([]);
  // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useState(function () {
    const storedItems = localStorage.getItem("watched");

    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [queryId, setQueryId] = useState(null);

  function handleQyeryId(id) {
    setQueryId((queryId) => (queryId === id ? null : id));
  }

  function handleCloseMovieDetails() {
    setQueryId(null);
  }

  function handleAddWatchedMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatchedMovie(id) {
    if (confirm("Are you sure you want to delete this movie?")) {
      setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
    }
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
            {
              signal: controller.signal,
            }
          );

          if (!res.ok) throw new Error("Failed to fetch movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("No movies found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          console.log(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      handleCloseMovieDetails();

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <SearchResults movies={movies} />
      </NavBar>
      <AppLayout>
        <BoxList>
          {isLoading && <Spinner />}
          {movies.length > 0 ? (
            !isLoading &&
            !error && <MovieList movies={movies} onQyeryId={handleQyeryId} />
          ) : (
            <p className="text">No results to display, use the search bar</p>
          )}
          {error && <ErrorMessage message={error} />}
        </BoxList>

        <BoxList>
          {queryId ? (
            <MovieDetails
              queryId={queryId}
              onCloseMovieDetails={handleCloseMovieDetails}
              onAddWatchedMovie={handleAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <MovieListWatched
                watched={watched}
                onDeleteWatchedMovie={handleDeleteWatchedMovie}
              />
            </>
          )}
        </BoxList>
      </AppLayout>
    </>
  );
}
