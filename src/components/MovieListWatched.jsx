import styles from "./MovieList.module.css";

import PropTypes from "prop-types";

function MovieListWatched({ watched }) {
  MovieListWatched.propTypes = {
    watched: PropTypes.array.isRequired,
  };

  return (
    <ul className={styles.list}>
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>⏱</span>
              <span>{movie.runtime} min</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieListWatched;
