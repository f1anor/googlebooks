import DropdownMenu from "common/DropdownMenu/DropdownMenu";
import React from "react";
import css from "./Sort.module.css";

const Sort = ({ currentSort, handleChahge, ...props }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>SORT:</div>
      <DropdownMenu
        value={currentSort}
        onChange={handleChahge}
        list={[
          { title: "RELEVANCE", value: "" },
          { title: "NEWEST", value: "newest" },
        ]}
      />
    </div>
  );
};
export default Sort;
