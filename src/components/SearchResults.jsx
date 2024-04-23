import PropTypes from "prop-types";

import styles from "./SearchResults.module.css";

function SearchResults({ movies }) {
  SearchResults.propTypes = {
    movies: PropTypes.array.isRequired,
  };

  return (
    <p className={styles["num-results"]}>
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default SearchResults;
