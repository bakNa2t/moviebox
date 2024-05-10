import Button from "./Button";

import PropTypes from "prop-types";

import styles from "./MovieItemWatched.module.css";

function MovieItemWatched({ movie, onDeleteWatchedMovie }) {
  MovieItemWatched.propTypes = {
    movie: PropTypes.object.isRequired,
    onDeleteWatchedMovie: PropTypes.func.isRequired,
  };

  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>&#11088;</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>&#127775;</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>&#9202;</span>
          <span>{movie.runtime} min</span>
        </p>
        <Button
          className={styles["btn-delete"]}
          onClick={() => onDeleteWatchedMovie(movie.imdbID)}
        >
          &#10006;
        </Button>
      </div>
    </li>
  );
}

export default MovieItemWatched;
