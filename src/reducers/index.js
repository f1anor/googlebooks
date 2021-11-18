import { combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import { bookshelfReducer } from "./bookshelf-reducer";

export default combineReducers({
  form: formReducer,
  bookshelf: bookshelfReducer,
});
