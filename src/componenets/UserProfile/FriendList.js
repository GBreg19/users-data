import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../UserList/User.module.css";

const FriendList = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/user/${props.userData.id}`);
  };

  // friend list on user profile page

  return (
    <li className={classes.card} onClick={onClickHandler}>
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

export default FriendList;
