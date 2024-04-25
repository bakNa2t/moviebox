import PropTypes from "prop-types";

function MovieItem({ movie, onQyeryId }) {
  MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
    onQyeryId: PropTypes.func.isRequired,
  };

  return (
    <li onClick={() => onQyeryId(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default MovieItem;
