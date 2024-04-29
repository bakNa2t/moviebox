import styles from "./ErrorMessage.module.css";

import PropTypes from "prop-types";

function ErrorMessage({ message }) {
  ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
  };

  return (
    <p className={styles.error}>
      <span>🚨 </span>
      {message}
    </p>
  );
}

export default ErrorMessage;
