import React from "react";

import styles from "./portfolioBox.module.css";

function portfolioBox({ title, header, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        {children}
        {title}
        {header}
        <img src="image/Frame.svg" alt="icon" />
      </div>
    </div>
  );
}

export default portfolioBox;
