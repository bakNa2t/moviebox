import { useEffect, useRef, useState } from "react";
import { useEventKey } from "../hooks/useEventKey";

import Rating from "./Rating";
import Spinner from "./Spinner";

import PropTypes from "prop-types";

import styles from "./MovieDetails.module.css";

import API_KEY from "../env/auth-key";
import Button from "./Button";

function MovieDetails({
  queryId,
  onCloseMovieDetails,
  onAddWatchedMovie,
  watched,
}) {
  MovieDetails.propTypes = {
    queryId: PropTypes.string.isRequired,
    onCloseMovieDetails: PropTypes.func.isRequired,
    onAddWatchedMovie: PropTypes.func.isRequired,
    watched: PropTypes.array.isRequired,
  };

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  const isWathched = watched.map((movie) => movie.imdbID).includes(queryId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === queryId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    imdbRating,
    Runtime: runtime,
    Plot: plot,
    Released: released,
    Director: director,
    Actors: actors,
    Genre: genre,
  } = movieDetails;

  function handleAdd() {
    const newMovie = {
      imdbID: queryId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingSet: countRef.current,
    };

    onAddWatchedMovie(newMovie);
    onCloseMovieDetails();
  }

  useEventKey("Escape", onCloseMovieDetails);
  useEventKey("Backspace", onCloseMovieDetails);

  useEffect(
    function () {
      if (userRating) {
        countRef.current += 1;
      }
    },
    [userRating]
  );

  useEffect(
    function () {
      async function fetchMovieDetails() {
        setIsLoading(true);

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${queryId}`
        );

        const data = await res.json();
        setMovieDetails(data);

        setIsLoading(false);
      }
      fetchMovieDetails();
    },
    [queryId]
  );

  useEffect(
    function () {
      if (!title) return;

      document.title = `${title} | MovieBox`;

      return () => (document.title = "MovieBox");
    },
    [title]
  );

  return (
    <div className={styles.details}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <Button
              className={styles["btn-back"]}
              onClick={onCloseMovieDetails}
            >
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M5 12l-5-4 5-4v2h11v4h-11v2z"
                ></path>
              </svg>
            </Button>
            <img
              src={poster !== "N/A" ? poster : "../../public/no-img.jpg"}
              alt={`${title} poster}`}
            />
            <div className={styles["details-overview"]}>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                IMDB rating <span>⭐️ </span> {imdbRating}
              </p>
            </div>
          </header>

          <section>
            <div className={styles["rating-container"]}>
              {!isWathched ? (
                <>
                  <Rating
                    maxRating={10}
                    color={"#fcc419"}
                    size={23}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className={styles["btn-add"]} onClick={handleAdd}>
                      Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>
                  This movie already has a rating with &#11088;{" "}
                  {watchedUserRating}
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>
              <span>Starring:</span> {actors}
            </p>
            <p>
              <span>Directored by:</span> {director}
            </p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
