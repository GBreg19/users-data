import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ id, data, allData }) => {
  // Breadcrumbs displayed on user profile
  return (
    <Fragment>
      <Link to={`/user/${data.id}`}>
        {`${data.prefix} ${data.name} ${data.lastName}`}
      </Link>
      <span>{allData.length - 1 !== id && " > "}</span>
    </Fragment>
  );
};

export default BreadCrumbs;
