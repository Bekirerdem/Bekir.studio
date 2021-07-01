import React from "react";

import styles from "./portfolio.module.css";

import Header from "../../helper/header";
import PortfolioBox from "../../helper/portfolioBox";

function Portfolio() {
  return (
    <section className={styles.container}>
      <Header title="Let's See My Work" header="MY PORTFOLIO" />
      <div className="flex gap-10 flex-wrap justify-center w-full pt-20">
        <PortfolioBox title="Web Design" header="My Project">
          <a href="https://responsive-portfolio-website-murex.vercel.app/">
            {null}
          </a>
        </PortfolioBox>
        <PortfolioBox title="Branding" header="My Project"></PortfolioBox>
        <PortfolioBox title="Branding" header="My Project"></PortfolioBox>
        <PortfolioBox title="Branding" header="My Project"></PortfolioBox>
        <PortfolioBox title="Branding" header="My Project"></PortfolioBox>
        <PortfolioBox title="Branding" header="My Project"></PortfolioBox>
      </div>
    </section>
  );
}

export default Portfolio;
