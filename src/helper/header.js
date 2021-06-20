import React from "react";

import styles from "./header.module.css" 

function Header() {
  return (
    <div className={styles.boxHeader}>
      <h3 className={styles.headerTitle}>My Technical Level</h3>
      <h2 className={styles.header}>MY SKILLS</h2>
      <div className={styles.border}></div>
    </div>
  );
}

export default Header;
