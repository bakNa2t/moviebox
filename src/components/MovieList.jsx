import MovieItem from "./MovieItem";

import PropTypes from "prop-types";

import styles from "./MovieList.module.css";

function MovieList({ movies }) {
  MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
  };

  return (
    <ul className={styles.list}>
      {movies?.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
