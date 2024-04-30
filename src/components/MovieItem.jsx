import Movie from "./Movie";

import PropTypes from "prop-types";

function MovieItem({ movie, onQyeryId }) {
  MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
    onQyeryId: PropTypes.func.isRequired,
  };

  return <Movie movie={movie} onQyeryId={onQyeryId} />;
}

export default MovieItem;
