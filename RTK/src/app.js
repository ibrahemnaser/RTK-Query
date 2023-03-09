import React from "react";
import CakeCounter from "./components/cake/cakeCounter";
import IceCounter from "./components/ice/iceCounter";
import CatComponent from "./components/cat/CatComponent";

import styles from "./styles/App.module.css";

const App = () => {
  return (
    <section className={styles.mainSection}>
      <h1>RTK</h1>
      <CakeCounter />
      <IceCounter />
      <CatComponent />
      <CatComponent />
      <CatComponent />
    </section>
  );
};

export default App;
