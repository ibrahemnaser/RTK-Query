import React from "react";
import Users from "./features/users/Users";
import Scrolling from "./features/scroll/Scrolling";
// import { Counter } from "./features/counter/Counter";
import styles from "./index.module.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/scrolling",
    element: <Scrolling />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}

        <h1 className={`${styles.title}`}>Redux toolkit Query</h1>
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
