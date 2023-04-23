import React, { Fragment, useEffect } from "react";
import User from "./User";
import Container from "../UI/Container";
import classes from "./UserList.module.css";
import useUser from "../../hooks/use-user";
import Loader from "../UI/Loader";

const UserList = () => {
  const { scrollListener, users, page, isLoading, error, fetchUserData } =
    useUser();

  useEffect(() => {
    fetchUserData("users");
  }, [page]);

  useEffect(() => {
    scrollListener();
  }, [users]);

  // user list on main page

  return (
    <Container>
      <ul className={classes.u_list}>
        {users.flat().map((user) => {
          return (
            <Fragment key={user.id}>
              <User userData={user} />
            </Fragment>
          );
        })}
      </ul>
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
    </Container>
  );
};

export default UserList;
