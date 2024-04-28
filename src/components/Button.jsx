import PropTypes from "prop-types";

import styles from "./Button.module.css";

function Button({ children, onClick }) {
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  return (
    <button className={styles["btn-toggle"]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
