import React from "react";

import styles from "./servicesBox.module.css";

function ServicesBox({ title, paragraf, number, children }) {
  return (
    <div className={styles.box}>
      {children}
      <span className={styles.number}>{number}</span>
      <h4 className={styles.header}>{title}</h4>
      <span className={styles.border}></span>
      <p className={styles.text}>{paragraf}</p>
    </div>
  );
}

export default ServicesBox;
