import PropTypes from "prop-types";

import styles from "./NavBar.module.css";

function NavBar({ children }) {
  NavBar.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return <nav className={styles["nav-bar"]}>{children}</nav>;
}

export default NavBar;
