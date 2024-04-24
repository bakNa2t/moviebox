import { useState } from "react";
// import MovieList from "./MovieList";

import PropTypes from "prop-types";

import styles from "./BoxList.module.css";

function BoxList({ children }) {
  BoxList.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className={styles.box}>
      <button
        className={styles["btn-toggle"]}
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
}

export default BoxList;
