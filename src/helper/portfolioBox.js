import React from "react";

import styles from "./portfolioBox.module.css";

function portfolioBox({ title, header }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <img className={styles.icon} src="image/Frame.svg" alt="icon" />
        <div className={styles.header}>{header}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
}

export default portfolioBox;
