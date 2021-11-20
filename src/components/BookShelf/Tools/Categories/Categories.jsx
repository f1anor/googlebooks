import DropdownMenu from "common/DropdownMenu/DropdownMenu";
import React from "react";
import css from "./Categories.module.css";

const Categories = ({ currentCat, handleChahge, ...props }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>CATEGORY:</div>
      <DropdownMenu
        value={currentCat}
        onChange={handleChahge}
        list={[
          { title: "ALL", value: "" },
          { title: "ART", value: "art" },
          { title: "BIOGRAPHY", value: "biography" },
          { title: "COMPUTERS", value: "computers" },
          { title: "HISTORY", value: "history" },
          { title: "MEDICAL", value: "medical" },
          { title: "POETRY", value: "poetry" },
        ]}
      />
    </div>
  );
};
export default Categories;
