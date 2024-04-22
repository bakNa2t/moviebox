import PropTypes from "prop-types";

import Search from "./Search";

import styles from "./NavBar.module.css";

function NavBar({ movies }) {
  NavBar.propTypes = {
    movies: PropTypes.array.isRequired,
  };

  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles.logo}>
        <span role="img">🎬</span>
        <h1>MovieBox</h1>
      </div>
      <Search />
      <p className={styles["num-results"]}>
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}

export default NavBar;
