import MovieItem from "./MovieItem";

import PropTypes from "prop-types";

import styles from "./MovieList.module.css";

function MovieList({ movies, onQyeryId }) {
  MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    onQyeryId: PropTypes.func.isRequired,
  };

  return (
    <ul className={`${styles.list} ${styles["list-movies"]}`}>
      {movies?.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} onQyeryId={onQyeryId} />
      ))}
    </ul>
  );
}

export default MovieList;
