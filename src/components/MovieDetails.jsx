import PropTypes from "prop-types";

import styles from "./MovieDetails.module.css";

function MovieDetails({ querydId, onCloseMovieDetails }) {
  MovieDetails.propTypes = {
    querydId: PropTypes.string.isRequired,
    onCloseMovieDetails: PropTypes.func.isRequired,
  };

  return (
    <div className={styles.details}>
      <button className={styles["btn-back"]} onClick={onCloseMovieDetails}>
        &larr;
      </button>
      {querydId}
    </div>
  );
}

export default MovieDetails;
