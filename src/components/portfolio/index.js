import React from "react";

import styles from "./portfolio.module.css";

import Header from "../../helper/header";
import PortfolioBox from "../../helper/portfolioBox";

function Portfolio() {
  return (
    <section className={styles.container}>
      <Header title="Let's See My Work" header="MY PORTFOLIO" />
      <PortfolioBox/>
    </section>
  );
}

export default Portfolio;
