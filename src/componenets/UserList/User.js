import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./User.module.css";

const User = (props) => {
  const navigate = useNavigate();

  // each user card in user list

  return (
    <li
      className={classes.card}
      onClick={() => navigate(`/user/${props.userData.id}`)}
    >
      <img
        src={`${props.userData.imageUrl}?v=${props.userData.id}`}
        alt={props.userData.name}
      />
      <span>
        <h1>
          {props.userData.prefix} {props.userData.name}{" "}
          {props.userData.lastName}
        </h1>
        <p>{props.userData.title}</p>
      </span>
    </li>
  );
};

export default User;
