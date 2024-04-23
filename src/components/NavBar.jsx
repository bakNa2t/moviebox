import PropTypes from "prop-types";

import Search from "./Search";
import Logo from "./Logo";

import styles from "./NavBar.module.css";
import SearchResults from "./SearchResults";

function NavBar({ movies }) {
  NavBar.propTypes = {
    movies: PropTypes.array.isRequired,
  };

  return (
    <nav className={styles["nav-bar"]}>
      <Logo />
      <Search />
      <SearchResults movies={movies} />
    </nav>
  );
}

export default NavBar;
