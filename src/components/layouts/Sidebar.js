import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Link to="/client/add" className="btn btn-warning btn-block">
      <i className="fas fa-plus"> New </i>
    </Link>
  );
};
