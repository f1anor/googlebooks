import React from "react";
import BookShelfContainer from "./BookShelf/BookShelfContainer";
import css from "./Layout.module.css";

const Layout = ({ ...props }) => {
  return (
    <div className={css.wrapper}>
      <BookShelfContainer />
    </div>
  );
};
export default Layout;
