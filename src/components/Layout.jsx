import React from "react";
import { Switch, Route } from "react-router-dom";
import BookShelfContainer from "./BookShelf/BookShelfContainer";

import css from "./Layout.module.css";
import SearchContainer from "./BookShelf/Search/SearchContainer";
import Tools from "./BookShelf/Tools/Tools";
import BookContainer from "./Book/BookContainer";
import Preloader from "./Preloader/Preloader";
import Error from "./Error/Error";

const Layout = ({ init, error }) => {
  return (
    <>
      {!!error && <Error error={error} />}
      {!init && <Preloader />}
      <div className={css.wrapperGlobal}>
        <div className={css.wrapper}>
          <div className={css.inner}>
            <h1 className={css.title}>BOOK FINDER</h1>
            <SearchContainer />
            <Tools />
            <Switch>
              <Route path="/book/:id">
                <BookContainer />
              </Route>
              <Route path="/">
                <BookShelfContainer />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
