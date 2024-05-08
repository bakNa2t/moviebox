import MovieItemWatched from "./MovieItemWatched";

import styles from "./MovieList.module.css";

import PropTypes from "prop-types";

function MovieListWatched({ watched, onDeleteWatchedMovie, onClearAllMovies }) {
  MovieListWatched.propTypes = {
    watched: PropTypes.array.isRequired,
    onDeleteWatchedMovie: PropTypes.func.isRequired,
    onClearAllMovies: PropTypes.func.isRequired,
  };

  return (
    <>
      <ul className={styles.list}>
        {watched.map((movie) => (
          <MovieItemWatched
            movie={movie}
            key={movie.imdbID}
            onDeleteWatchedMovie={onDeleteWatchedMovie}
          />
        ))}
      </ul>
      {watched.length > 0 && (
        <button className={styles["btn-clear"]} onClick={onClearAllMovies}>
          Clear Movies
        </button>
      )}
    </>
  );
}

export default MovieListWatched;
