import React from "react";

import styles from "./styles/App.module.css";
import CakeCounter from "./components/cakeComponents/cakeCounter";
import IceCounter from "./components/iceComponents/iceCounter";
import AsyncCounter from "./components/async/AsyncCounter";

const App = () => {
  console.log("APP RENDERED");
  return (
    <section className={styles.mainSection}>
      <h1>REACT REDUX</h1>
      <CakeCounter />
      <IceCounter />
      <AsyncCounter />
    </section>
  );
};

export default App;
