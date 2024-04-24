import Logo from "./Logo";

import PropTypes from "prop-types";

import styles from "./NavBar.module.css";

function NavBar({ children }) {
  NavBar.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <nav className={styles["nav-bar"]}>
      <Logo />
      {children}
    </nav>
  );
}

export default NavBar;
