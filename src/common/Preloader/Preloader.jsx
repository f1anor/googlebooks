import React from "react";
import css from "./Preloader.module.css";
import { ReactComponent as PreloaderAnim } from "assets/svg/preloader2.svg";

const Preloader = ({ ...props }) => {
  return (
    <div className={css.wrapper}>
      <PreloaderAnim />
    </div>
  );
};
export default Preloader;
