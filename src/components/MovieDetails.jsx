import PropTypes from "prop-types";

import styles from "./MovieDetails.module.css";

function MovieDetails({ querydId }) {
  MovieDetails.propTypes = {
    querydId: PropTypes.string.isRequired,
  };

  return <div className={styles.details}>{querydId}</div>;
}

export default MovieDetails;
