import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetUsersWithPageQuery } from "../../services/userApi";
import styles from "./Scrolling.module.css";

const Scrolling = () => {
  const [currPg, setCurrPg] = useState(1);
  const [bodyHeight, setBodyHeight] = useState(0);

  // onscroll pagination

  const { data, isFetching,refetch } = useGetUsersWithPageQuery(currPg);

 

const handleRefetch=()=>{
  console.log('HELLO REFETCH');
  refetch();
}

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (
        scrolledToBottom &&
        !isFetching &&
        bodyHeight !== document.body.offsetHeight
      ) {
        setBodyHeight(document.body.offsetHeight);
        console.log("Fetching more data...");
        setCurrPg(currPg + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [currPg, isFetching, bodyHeight]);

  return (
    <>
      <Link className={styles.linkComponent} to={"/"}>
        Back
      </Link>
      <button onClick={handleRefetch}>
        Refetch
      </button>
      <section className={styles.sectionContainer}>
        <h2 className={styles.title}>OnScroll Fetching using RTK Query!!</h2>
        <div className={styles.dataContainer}>
          {data?.map((ele, index) => (
            <div key={index} className={`${isFetching ? styles.fetching : ""}`}>
              <p>Name:: {ele.name}</p>
              <p>Email:: {ele.email}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Scrolling;
