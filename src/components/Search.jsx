import { useRef } from "react";

import PropTypes from "prop-types";

import styles from "./Search.module.css";
import { useEventKey } from "../hooks/useEventKey";

function Search({ query, setQuery }) {
  Search.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
  };

  const searchElem = useRef(null);

  useEventKey("Enter", function () {
    if (document.activeElement === searchElem.current) return;
    searchElem.current.focus();
    setQuery("");
  });

  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (document.activeElement === searchElem.current) return;

  //       if (e.code === "Enter") {
  //         searchElem.current.focus();
  //         setQuery("");
  //       }
  //     }

  //     document.addEventListener("keydown", callback);

  //     return () => document.removeEventListener("keydown", callback);
  //   },
  //   [setQuery]
  // );

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
