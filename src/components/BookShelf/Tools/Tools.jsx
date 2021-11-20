import React from "react";
import CategoriesContainer from "./Categories/CategoriesContainer";
import SortContainer from "./Sort/SortContainer";
import css from "./Tools.module.css";

const Tools = ({ ...props }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.inner}>
        <CategoriesContainer />
        <SortContainer />
      </div>
    </div>
  );
};
export default Tools;
