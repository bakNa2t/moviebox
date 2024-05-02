import PropTypes from "prop-types";

import styles from "./Search.module.css";
import { useEffect } from "react";

function Search({ query, setQuery }) {
  Search.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
  };

  useEffect(function () {
    const elem = document.querySelector(`.${styles.search}`);
    elem.focus();
  }, []);

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
