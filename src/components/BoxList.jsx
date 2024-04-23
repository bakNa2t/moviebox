import { useState } from "react";

import PropTypes from "prop-types";

import styles from "./BoxList.module.css";

function BoxList({ movies }) {
  BoxList.propTypes = {
    movies: PropTypes.array.isRequired,
  };

  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className={styles.box}>
      <button
        className={styles["btn-toggle"]}
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className={styles.list}>
          {movies?.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>📅</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BoxList;
