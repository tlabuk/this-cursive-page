import React from "react";
import styles from "./styles.module.scss";

const ReadMoreButton = ({ href }) => {
  return (
    <div className={`${styles.myButtons} ${styles.myButton}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <svg>
          <rect
            className={styles.myRect}
            x="0"
            y="0"
            fill="none"
            width="100%"
            height="100%"
          />
        </svg>
        Click to read
      </a>
    </div>
  );
};

export default ReadMoreButton;
