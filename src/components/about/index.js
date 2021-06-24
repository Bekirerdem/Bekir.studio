import React from "react";

import styles from "./about.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.boxİmage}>
        <img className={styles.image} src="image/İmg.jpg" alt="ProfilPhoto" />
        <div className={styles.imageBg}></div>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.items}>
          <h3 className={styles.aboutTitle}>
            <span className={styles.border}></span>I'm Bekir Erdem
          </h3>
          <h2 className={styles.aboutHeader}>
            FrontEnd - Developer <br />
            Based in Bursa
          </h2>
          <p>
            Hello, I'm Bekir. I am a developer dealing with Front-End
            technologies and I am also dealing with design. I develop my
            projects using React&Next.js technologies.
          </p>
        </div>
        <div className={`flex space-x-14 ${styles.information}`}>
          <div className={styles.box}>
            <p className={styles.text}>
              Name: <span className={styles.textAlt}>Bekir Erdem</span>
            </p>
            <p className={styles.text}>
              Phone: <span className={styles.textAlt}>0531 202 6105</span>
            </p>
            <p className={styles.text}>
              Freelance: <span className={styles.textAlt}>Available</span>
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>
              Age: <span className={styles.textAlt}>24</span>
            </p>
            <p className={styles.text}>
              Address: <span className={styles.textAlt}>Bursa, Nilüfer</span>
            </p>
            <p className={styles.text}>
              Nationality: <span className={styles.textAlt}>Turkey</span>
            </p>
          </div>
          <img className={styles.frameSvg} src="image/icon.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
