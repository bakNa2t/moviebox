import styles from "./ErrorMessage.module.css";

import PropTypes from "prop-types";

function ErrorMessage({ message, emoji }) {
  ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
  };

  return (
    <p className={styles.error}>
      <span role="img">{emoji} </span>
      {/* <span role="img">🚨 </span> */}
      {message}
    </p>
  );
}

export default ErrorMessage;
