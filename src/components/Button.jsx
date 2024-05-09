import PropTypes from "prop-types";

import styles from "./Button.module.css";

function Button({ children, classname, onClick }) {
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    classname: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  return (
    <button className={styles[classname]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
