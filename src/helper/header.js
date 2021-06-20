import React from "react";

import styles from "./header.module.css" 

function Header( { title, header }) {
  return (
    <div className={styles.boxHeader}>
      <h3 className={styles.headerTitle}>{title}</h3>
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.border}></div>
    </div>
  );
}

export default Header;
