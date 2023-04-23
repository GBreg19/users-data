import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../UI/Container";
import FriendList from "./FriendList";
import UserCard from "./UserCard";
import useUser from "../../hooks/use-user";
import Loader from "../UI/Loader";
import BreadCrumbs from "./BreadCrumbs";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const {
    scrollListener,
    page,
    user,
    isLoading,
    error,
    friendList,
    fetchUserData,
    breadCrumbs,
  } = useUser();

  const { userId } = useParams();

  // fetches user profile card and user friend list

  useEffect(() => {
    fetchUserData("user", userId);
  }, [userId]);

  useEffect(() => {
    fetchUserData("friends", userId);
  }, [page]);

  useEffect(() => {
    fetchUserData("friends", userId, "refresh");
  }, [userId]);

  useEffect(() => {
    scrollListener();
  }, [friendList]);

  // user profile page

  return (
    <Container profile={true}>
      {user.map((data) => (
        <Fragment key={data.id}>
          <UserCard userData={data} />
        </Fragment>
      ))}
      <div className={classes.section}>
        <div className={classes.breadcrumbs}>
          {breadCrumbs.map((breadcrumb, id) => {
            return (
              <BreadCrumbs
                key={id}
                id={id}
                data={breadcrumb}
                allData={breadCrumbs}
              />
            );
          })}
        </div>
        <div>
          <h2>Friends: </h2>
        </div>
      </div>
      <ul className={classes.u_list}>
        {friendList.flat().map((user) => {
          return (
            <Fragment key={user.id}>
              <FriendList userData={user} />
            </Fragment>
          );
        })}
        {isLoading && <Loader />}
        {error && <h1>{error}</h1>}
      </ul>
    </Container>
  );
};

export default UserProfile;
