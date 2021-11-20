import React from "react";
import css from "./Error.module.css";

const Error = ({ error, ...props }) => {
  return <div className={css.wrapper}>{error}</div>;
};
export default Error;
