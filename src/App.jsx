import { useState } from "react";
import { useFetchMovies } from "./hooks/useFetchMovies";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ThemeLightDarkToggleProvider } from "./context/themeLightDarkToggle";

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
import Footer from "./components/Footer";
import ButtonTheme from "./components/ButtonTheme";

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

  function handleClearAllMovies() {
    if (confirm("Are you sure you want to delete all movies?")) {
      setWatched([]);
    }
  }

  return (
    <ThemeLightDarkToggleProvider>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
      </NavBar>
      <AppLayout>
        <BoxList>
          {isLoading && <Spinner />}
          <SearchResults movies={movies} />
          {movies.length > 0 && !isLoading && !error && (
            <MovieList movies={movies} onQyeryId={handleQyeryId} />
          )}
          {movies.length === 0 && !isLoading && !error && (
            <ErrorMessage
              message={"No results to display, use the search bar"}
              emoji={"🔎"}
            />
          )}
          {error && <ErrorMessage message={error} emoji={"🚨"} />}
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
                onClearAllMovies={handleClearAllMovies}
              />
              {watched.length === 0 && (
                <ErrorMessage
                  message={
                    "Here will be your list of watched movies, but nothing added yet"
                  }
                  emoji={"👀"}
                />
              )}
            </>
          )}
        </BoxList>
      </AppLayout>
      <Footer />
      <ButtonTheme />
    </ThemeLightDarkToggleProvider>
  );
}
