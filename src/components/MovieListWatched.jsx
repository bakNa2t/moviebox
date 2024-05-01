import MovieItemWatched from "./MovieItemWatched";

import styles from "./MovieList.module.css";

import PropTypes from "prop-types";

function MovieListWatched({ watched, onDeleteWatchedMovie }) {
  MovieListWatched.propTypes = {
    watched: PropTypes.array.isRequired,
    onDeleteWatchedMovie: PropTypes.func.isRequired,
  };

  return (
    <ul className={styles.list}>
      {watched.map((movie) => (
        <MovieItemWatched
          movie={movie}
          key={movie.imdbID}
          onDeleteWatchedMovie={onDeleteWatchedMovie}
        />
      ))}
    </ul>
  );
}

export default MovieListWatched;
