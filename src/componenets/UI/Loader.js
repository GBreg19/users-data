import React, { Fragment } from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  // Loader animation
  return (
    <Fragment>
      <div className={classes.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default Loader;
