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
import Footer from "./components/Footer";
import Button from "./components/Button";

export default function App() {
  const [query, setQuery] = useState("");
  const [queryId, setQueryId] = useState(null);
  const [watched, setWatched] = useLocalStorage([], "watched");
  const { movies, isLoading, error } = useFetchMovies(
    query,
    handleCloseMovieDetails
  );
  const [isLightMode, setIsLightMode] = useState(true);

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

  function handleToggleThemeMode() {
    isLightMode
      ? document.body.classList.add("theme-light")
      : document.body.classList.remove("theme-light");
    setIsLightMode((isLightMode) => !isLightMode);
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
      <Button className={"btn-mode"} onClick={handleToggleThemeMode}>
        {isLightMode ? (
          <svg
            fill="var(--color-primary)"
            width="22px"
            height="22px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />

            <g data-name="Layer 14" id="Layer_14">
              <path d="M18,27H14a2,2,0,0,1-2-2V21.16a10,10,0,0,1-6-9.47A10.14,10.14,0,0,1,15.69,2h0A10,10,0,0,1,26,12a10,10,0,0,1-6,9.16V25A2,2,0,0,1,18,27ZM15.75,4A8.12,8.12,0,0,0,8,11.75a8,8,0,0,0,5.33,7.79,1,1,0,0,1,.67.94V25h4V20.48a1,1,0,0,1,.67-.94A8,8,0,0,0,15.75,4Z" />

              <path d="M15,24V19.48a9,9,0,0,1-6-8.76c.09-3,1.71-4.93,4.52-6.32C9.49,4.47,7.12,8,7,11.72a9,9,0,0,0,6,8.76V25a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1H16A1,1,0,0,1,15,24Z" />

              <path d="M19,30H13a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />

              <path d="M20.85,11.47A1,1,0,0,0,20,11H18.87l1-1.45a1,1,0,0,0,.05-1A1,1,0,0,0,19,8H15a1,1,0,0,0-.89.55l-3,6A1,1,0,0,0,12,16h3v4a1,1,0,0,0,.77,1A.91.91,0,0,0,16,21a1,1,0,0,0,.89-.55l4-8A1,1,0,0,0,20.85,11.47Z" />

              <path d="M5,6a1,1,0,0,1-.71-.29l-2-2A1,1,0,0,1,3.71,2.29l2,2a1,1,0,0,1,0,1.42A1,1,0,0,1,5,6Z" />

              <path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" />

              <path d="M3,21a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l2-2a1,1,0,0,1,1.42,1.42l-2,2A1,1,0,0,1,3,21Z" />

              <path d="M27,6a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l2-2a1,1,0,1,1,1.42,1.42l-2,2A1,1,0,0,1,27,6Z" />

              <path d="M29,13H28a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" />

              <path d="M29,21a1,1,0,0,1-.71-.29l-2-2a1,1,0,0,1,1.42-1.42l2,2a1,1,0,0,1,0,1.42A1,1,0,0,1,29,21Z" />
            </g>
          </svg>
        ) : (
          <svg
            fill="var(--color-primary)"
            width="22px"
            height="22px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />

            <g data-name="Layer 88" id="Layer_88">
              <path d="M18,27H14a2,2,0,0,1-2-2V21.16a10,10,0,0,1-6-9.47A10.14,10.14,0,0,1,15.69,2h0A10,10,0,0,1,20,21.16V25A2,2,0,0,1,18,27ZM15.75,4A8.12,8.12,0,0,0,8,11.75a8,8,0,0,0,5.33,7.79,1,1,0,0,1,.67.94V25h4V20.48a1,1,0,0,1,.67-.94,8,8,0,0,0,2.9-13.28A7.85,7.85,0,0,0,15.75,4Z" />

              <path d="M19,30H13a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />

              <path d="M15,24V19.48a9,9,0,0,1-6-8.76c.09-3,1.71-4.93,4.52-6.32C9.49,4.47,7.12,8,7,11.72a9,9,0,0,0,6,8.76V25a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1H16A1,1,0,0,1,15,24Z" />
            </g>
          </svg>
        )}
      </Button>
    </>
  );
}
