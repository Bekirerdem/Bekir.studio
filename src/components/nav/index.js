import React, { useEffect, useState } from "react";

import styles from "./nav.module.css";

import useToggle from "../../helper";

function Nav() {
  const [scroll, setScroll] = useState({ scrollY: undefined });
  const [state, setState] = useToggle();

  useEffect(() => {
    function handleResize() {
      setScroll({
        scrollY: window.pageYOffset,
      });
    }
    window.addEventListener("scroll", handleResize);
    handleResize();
    return () => window.removeEventListener("scroll", handleResize);
  }, []);

  return (
    <div>
      <nav
        className={`flex justify-between items-center px-36 py-6 
        ${styles.nav}
        ${scroll.scrollY > 40 ? styles.actives : styles.disabled}`}
      >
        <div>
          <p className={styles.logo}>code space</p>
        </div>
        <div
          className={styles.menuBars}
          role="button"
          onClick={() => setState(!state)}
        >
          <i></i>
          <i></i>
          <i></i>
        </div>
      </nav>
      <div
        className={`absolute flex flex-col top-0 gap-3 w-full h-full items-center justify-center ${
          state ? styles.menuChanged : styles.setMenuChanged
        }`}
      >
        <a className={styles.link} href="/">
          Home
        </a>
        <a className={styles.link} href="../about">
          About
        </a>
        <a className={styles.link} href="skills">
          Skilss
        </a>
        <a className={styles.link} href="services">
          Services
        </a>
        <a className={styles.link} href="portfolio">
          Portfolio
        </a>
        <a className={styles.link} href="blog">
          Blog
        </a>
        <a className={styles.link} href="contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Nav;
