// import { useState } from "react";

import BoxList from "./BoxList";
import BoxWatched from "./BoxWatched";

import PropTypes from "prop-types";

import styles from "./AppLayout.module.css";

// const average = (arr) =>
//   arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function AppLayout({ movies, watched }) {
  AppLayout.propTypes = {
    movies: PropTypes.array.isRequired,
    watched: PropTypes.array.isRequired,
  };

  return (
    <main className={styles.main}>
      <BoxList movies={movies} />
      <BoxWatched watched={watched} />
    </main>
  );
}

export default AppLayout;
