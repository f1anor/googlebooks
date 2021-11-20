import { initApp } from "actions/app-actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getErrors } from "selectors/app-selectors";
import { getInitState } from "selectors/app-selectors";

import Layout from "./Layout";

const LayoutContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const init = useSelector((state) => getInitState(state));
  const error = useSelector((state) => getErrors(state));

  window.onload = () => {
    dispatch(initApp());
  };
  return <Layout init={init} error={error} />;
};
export default LayoutContainer;
