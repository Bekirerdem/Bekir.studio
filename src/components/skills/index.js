import React from "react";
import cn from "classnames";

import styles from "./skills.module.css";

import Header from "../../helper/header";

function Skills() {
  return (
    <div className={styles.skills}>
      <Header title="My Technical Level" header="MY SKILLS" />
      <div className={styles.lists}>
        <div className={styles.list}>
          <div className={styles.data}>
            <div className={styles.titles}>
              <h5 className={styles.name}>Web Design</h5>
            </div>
            <div className={styles.bar}>
              <div className={cn(styles.percentage, styles.webDesign)}>
                <span className={styles.webDesignNumber}>80%</span>
              </div>
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.titles}>
              <h5 className={styles.name}>Figma</h5>
            </div>
            <div className={styles.bar}>
              <div className={cn(styles.percentage, styles.figma)}>
                <span className={styles.figmaNumber}>75%</span>
              </div>
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.titles}>
              <h5 className={styles.name}>Photoshop</h5>
            </div>
            <div className={styles.bar}>
              <div className={cn(styles.percentage, styles.photoshop)}>
                <span className={styles.photoshopNumber}>70%</span>
              </div>
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.titles}>
              <h5 className={styles.name}>HTML5</h5>
            </div>
            <div className={styles.bar}>
              <div className={cn(styles.percentage, styles.html)}>
                <span className={styles.htmlNumber}>90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.data}>
            <div className={styles.titles}>
              <h5 className={styles.name}>CSS3 & SASS</h5>
            </div>
            <div className={styles.bar}>
              <div className={cn(styles.percentage, styles.css)}>
                <span className={styles.cssNumber}>90%</span>
              </div>
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.titles}>
              <h5 className={styles.name}>Tailwind & Bootstrap</h5>
            </div>
            <div className={styles.bar}>
              <div className={cn(styles.percentage, styles.tailwind)}>
                <span className={styles.tailwindNumber}>60%</span>
              </div>
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.titles}>
              <h5 className={styles.name}>JavaScript</h5>
            </div>
            <div className={styles.bar}>
              <div className={cn(styles.percentage, styles.js)}>
                <span className={styles.jsNumber}>50%</span>
              </div>
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.titles}>
              <h5 className={styles.name}>React & Next.js</h5>
            </div>
            <div className={styles.bar}>
              <div className={cn(styles.percentage, styles.react)}>
                <span className={styles.reactNumber}>60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
