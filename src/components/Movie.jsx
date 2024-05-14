import { FaRegCalendar } from "react-icons/fa";

import PropTypes from "prop-types";

function Movie({ movie, onQyeryId }) {
  Movie.propTypes = {
    movie: PropTypes.object.isRequired,
    onQyeryId: PropTypes.func.isRequired,
  };

  return (
    <li onClick={() => onQyeryId(movie.imdbID)}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "../../public/no-img.jpg"}
        alt={`${movie.Title} poster`}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>
            <FaRegCalendar />
          </span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
