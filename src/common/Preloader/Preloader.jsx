import React from "react";
import css from "./Preloader.module.css";
import { ReactComponent as PreloaderAnim } from "assets/svg/preloader2.svg";

const Preloader = ({ className = "" }) => {
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <PreloaderAnim />
    </div>
  );
};
export default Preloader;
