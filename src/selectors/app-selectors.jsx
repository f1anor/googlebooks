import { createSelector } from "reselect";
import { getBookError } from "./book-selectors";
import { getBookshelfError } from "./bookshelf-selectors";

export const getInitState = (state) => {
  return state.app.init;
};

export const getErrors = createSelector(
  getBookError,
  getBookshelfError,
  (bookError, bookshelfError) => {
    return bookError || bookshelfError;
  }
);
