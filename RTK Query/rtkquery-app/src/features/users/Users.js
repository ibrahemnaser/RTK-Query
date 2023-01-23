import { skipToken } from "@reduxjs/toolkit/dist/query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetUsersQuery,
  useAddNewUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
} from "../../services/userApi";

import styles from "./Users.module.css";

const Users = () => {
  const [isShow, setIsShow] = useState(false);
  const [userId, setUserId] = useState(null);
  const [myState, setMyState] = useState(skipToken);
  const { isError, isLoading, isFetching, data, refetch, isUninitialized } =
    useGetUsersQuery(myState);

  // console.log(data);
  // console.log(useGetUsersQuery());

  const [addNewUser, { isLoading: isLoadingPost }] = useAddNewUserMutation();

  const [dltUser] = useDeleteUserMutation();

  const fetchUser = () => {
    setMyState();
    if (!isUninitialized) refetch();
  };
  const addUser = () => {
    addNewUser({
      name: `NEW + ${data.length + 1}`,
      email: "t@t.com",
    });
  };
  const deleteUser = (id) => {
    dltUser(id);
  };

  const showDetails = (id) => {
    setIsShow(true);
    setUserId(id);
    console.log(id);
  };

  const hideDetails = () => {
    setIsShow(false);
    setUserId(null);
  };
  return (
    <>
      <Link className={styles.linkComponent} to={"/scrolling"}>
        Scrolling
      </Link>

      <section className={styles.cattySection}>
        <h2 className={styles.title}>
          Fetch Users Data from an API using RTK Query!!
        </h2>
        <div className={styles.btnContainer}>
          <button className={styles.fetchBtn} onClick={fetchUser}>
            {isLoading || isFetching ? <Loader /> : "Get Users"}
          </button>
          <button className={styles.fetchBtn} onClick={addUser}>
            {isLoadingPost ? <Loader /> : "Add Users"}
          </button>
        </div>
        <div>
          {isError && <p>Sorry, there is an error!!</p>}
          {isLoading && <p>LOADING...</p>}
          {data &&
            data.map((ele, index) => (
              <div
                className={`${styles.postContainer} ${
                  isLoadingPost || isFetching ? styles.loadingPost : ""
                }`}
                key={index}
              >
                <p>{ele.id}</p>
                <button
                  className={styles.fetchBtn}
                  onClick={() => deleteUser(ele.id)}
                >
                  {"Delete"}
                </button>
                <button
                  className={styles.fetchBtn}
                  onMouseOver={(_) => showDetails(ele.id)}
                  onMouseLeave={hideDetails}
                >
                  {"Show Details"}
                </button>
              </div>
            ))}
        </div>
      </section>
      {isShow ? <Details user={userId} /> : ""}
    </>
  );
};

const Loader = () => {
  return <div className={styles.loader} />;
};

const Details = ({ user }) => {
  // single user
  const { isFetching, data } = useGetUserQuery(user);
  console.log(data);
  return (
    <section className={`${styles.modal}`}>
      {isFetching ? (
        <span>Fetching...</span>
      ) : data ? (
        <>
          <div>Name: {data.name}</div>
          <div>Email: {data.email}</div>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default Users;
