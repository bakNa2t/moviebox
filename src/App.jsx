import { useState } from "react";
import { useFetchMovies } from "./hooks/useFetchMovies";
import { useLocalStorage } from "./hooks/useLocalStorage";

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

export default function App() {
  const [query, setQuery] = useState("");
  const [queryId, setQueryId] = useState(null);
  const [watched, setWatched] = useLocalStorage([], "watched");
  const { movies, isLoading, error } = useFetchMovies(
    query,
    handleCloseMovieDetails
  );

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
