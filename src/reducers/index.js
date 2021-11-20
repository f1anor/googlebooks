import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "./app-reducer";
import { bookReducer } from "./book-reducer";
import { bookshelfReducer } from "./bookshelf-reducer";

export default combineReducers({
  bookshelf: bookshelfReducer,
  book: bookReducer,
  app: appReducer,
});
