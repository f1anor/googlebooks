import React, { forwardRef } from "react";
import css from "./Search.module.css";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";

const Search = (
  {
    value,
    changeValue,
    handleSetSearch,
    handleSubmit,
    className = "",
    disabled,
  },
  ref
) => {
  return (
    <div className={css.wrapper}>
      <div className={css.inputWrapper}>
        <input
          type="text"
          ref={ref}
          className={[css.input, className].join(" ")}
          value={value}
          onChange={(e) => changeValue(e.target.value)}
          onKeyDown={handleSubmit}
          disabled={disabled}
        />
        <button className={css.searchButton} onClick={handleSetSearch}>
          <SearchIcon className={css.icon} />
        </button>
      </div>
    </div>
  );
};

export default forwardRef(Search);
