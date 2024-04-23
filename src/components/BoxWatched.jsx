import { useState } from "react";

import PropTypes from "prop-types";

import styles from "./BoxWatched.module.css";
import Summary from "./Summary";

function BoxWatched({ watched }) {
  BoxWatched.propTypes = {
    watched: PropTypes.array.isRequired,
  };

  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className={styles.box}>
      <button
        className={styles["btn-toggle"]}
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <Summary watched={watched} />

          <ul className={styles.list}>
            {watched.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
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
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BoxWatched;
