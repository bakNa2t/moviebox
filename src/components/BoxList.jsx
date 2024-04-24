import { useState } from "react";

import PropTypes from "prop-types";

import styles from "./BoxList.module.css";

function BoxList({ children }) {
  BoxList.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.box}>
      <button
        className={styles["btn-toggle"]}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default BoxList;
