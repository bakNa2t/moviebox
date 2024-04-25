import { useEffect, useState } from "react";

import AppLayout from "./components/AppLayout";
import BoxList from "./components/BoxList";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import Summary from "./components/Summary";
import MovieListWatched from "./components/MovieListWatched";

const API_KEY = "f84fc31d";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched /*setWatched*/] = useState(tempWatchedData);

  useEffect(function () {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=Lord of the Rings`
      );
      const data = await res.json();
      setMovies(data.Search);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <Search />
        <SearchResults movies={movies} />
      </NavBar>
      <AppLayout>
        <BoxList>
          <MovieList movies={movies} />
        </BoxList>

        <BoxList>
          <Summary watched={watched} />
          <MovieListWatched watched={watched} />
        </BoxList>
      </AppLayout>
    </>
  );
}
