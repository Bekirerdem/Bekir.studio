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
        <h3 className={styles.aboutTitle}><span className={styles.border}></span>I'm Bekir Erdem</h3>
        <h2 className={styles.aboutHeader}>
          FrontEnd - Developer <br />
          Based in Bursa
        </h2>
        <p>
          Merhaba, ben Bekir. Front-End teknolojileri ile ilgilenen bir
          geliştiriciyim ve aynı zamanda tasarım ile de uğraşmaktayım.
          Projelerimi React&Next.js teknolojilerini kullanarak geliştirmekteyim.
        </p>
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
