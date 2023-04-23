import React, { Fragment } from "react";
import classes from "./UserCard.module.css";

const UserCard = ({ userData }) => {
  // User card on user profile page
  return (
    <Fragment>
      <div className={classes.user_card}>
        <div className={classes.user_img}>
          <img
            src={`${userData.imageUrl}?v=${userData.id}`}
            alt={userData.name}
          />
        </div>
        <fieldset className={classes.left_fieldset}>
          <legend>Info</legend>
          <h4>
            {`
          ${userData.prefix}
          ${userData.name} ${userData.lastName}
          `}
          </h4>
          <p>{userData.title}</p>
          <p>{userData.jobDescription}</p>
          <ul>
            <li>
              <span>Email</span>: {userData.email}
            </li>
            <li>
              <span>Ip Address</span>: {userData.ip}
            </li>
            <li>
              <span>Ip Address</span>: {userData.ip}
            </li>
            <li>
              <span>Job Area</span>: {userData.jobArea}
            </li>
            <li>
              <span>Job Type</span>: {userData.jobType}
            </li>
          </ul>
        </fieldset>
        <fieldset className={classes.right_fieldset}>
          <legend>Address</legend>
          <ul>
            <h4>{userData.company.name}</h4>
            <li>
              <span>City</span>: {userData.address.city}
            </li>
            <li>
              <span>Country</span>: {userData.address.country}
            </li>
            <li>
              <span>State</span>: {userData.address.state}
            </li>
            <li>
              <span>Street Address</span>: {userData.address.streetAddress}
            </li>
            <li>
              <span>ZIP</span>: {userData.address.zipCode}
            </li>
          </ul>
        </fieldset>
      </div>
    </Fragment>
  );
};

export default UserCard;
