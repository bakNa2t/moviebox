import MovieItemWatched from "./MovieItemWatched";

import styles from "./MovieList.module.css";

import PropTypes from "prop-types";

function MovieListWatched({ watched }) {
  MovieListWatched.propTypes = {
    watched: PropTypes.array.isRequired,
  };

  return (
    <ul className={styles.list}>
      {watched.map((movie) => (
        <MovieItemWatched movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieListWatched;
