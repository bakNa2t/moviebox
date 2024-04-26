import PropTypes from "prop-types";

function MovieItemWatched({ movie }) {
  MovieItemWatched.propTypes = {
    movie: PropTypes.object.isRequired,
  };

  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
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
  );
}

export default MovieItemWatched;
