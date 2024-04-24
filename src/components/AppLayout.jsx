import PropTypes from "prop-types";

import styles from "./AppLayout.module.css";

function AppLayout({ children }) {
  AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return <main className={styles.main}>{children}</main>;
}

export default AppLayout;
