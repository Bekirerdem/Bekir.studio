import React from "react";

import styles from "./app.css";

import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Services from "./components/services";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Services/>
    </div>
  );
}

export default App;