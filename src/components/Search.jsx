import { useRef } from "react";
import { useEventKey } from "../hooks/useEventKey";

import PropTypes from "prop-types";

import styles from "./Search.module.css";

function Search({ query, setQuery }) {
  Search.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
  };

  const searchElem = useRef(null);

  useEventKey("Enter" || "NumpadEnter", function () {
    if (document.activeElement === searchElem.current) return;
    searchElem.current.focus();
    setQuery("");
  });

  useEventKey("NumpadEnter", function () {
    if (document.activeElement === searchElem.current) return;
    searchElem.current.focus();
    setQuery("");
  });

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={searchElem}
    />
  );
}

export default Search;
