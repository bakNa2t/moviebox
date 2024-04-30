import { useState } from "react";

import Button from "./Button";

import PropTypes from "prop-types";

import styles from "./BoxList.module.css";

function BoxList({ children }) {
  BoxList.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.box}>
      <Button onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "⮝" : "⮟"}
      </Button>
      {/* <button
        className={styles["btn-toggle"]}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button> */}
      {isOpen && children}
    </div>
  );
}

export default BoxList;
