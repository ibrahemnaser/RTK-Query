import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCat } from "../../rtk/slice/catSlice";
import styles from "./CatComponent.module.css";

const CatComponent = () => {
  const cat = useSelector((state) => state.cat);
  const dispatch = useDispatch();
  console.log(cat);
  return (
    <section className={styles.catSection}>
      <button onClick={() => dispatch(fetchCat(15))}>Fetch Cat</button>
      <div>
        {cat.isLoading && <h2>Loading....</h2>}

        {cat.data.length && !cat.isLoading
          ? cat.data.map((ele, index) => (
              <div className={styles.imgContainer} key={index}>
                <img src={ele.url} />
              </div>
            ))
          : ""}

        {cat.error.length ? <p>{cat.error}</p> : ""}
      </div>
    </section>
  );
};

export default CatComponent;
