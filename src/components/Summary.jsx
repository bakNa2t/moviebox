import PropTypes from "prop-types";

import styles from "./Summary.module.css";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function Summary({ watched }) {
  Summary.propTypes = {
    watched: PropTypes.array.isRequired,
  };

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className={styles.summary}>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>&#11088;</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>&#127775;</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>&#9202;</span>
          <span>{avgRuntime.toFixed(0)} min</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
