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
        {isOpen ? (
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="var(--color-background-500)"
              d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
            />
          </svg>
        ) : (
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="var(--color-background-500)"
              d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
            />
          </svg>
        )}
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
