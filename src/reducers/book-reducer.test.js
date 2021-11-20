import { bookReducer } from "./book-reducer";

import { FETCH_BOOK_BY_ID_START } from "actionTypes";
import { FETCH_BOOK_BY_ID_SUCCESS } from "actionTypes";
import { FETCH_BOOK_BY_ID_FAILURE } from "actionTypes";

describe("book reducer", () => {
  it("FETCH_BOOK_BY_ID_START", () => {
    const initialState = {
      isBookFetching: null,
    };

    const action = {
      type: FETCH_BOOK_BY_ID_START,
    };

    expect(bookReducer(initialState, action)).toEqual({
      book: {},
      isBookFetching: true,
      message: "",
    });
  });
  it("FETCH_BOOK_BY_ID_SUCCESS", () => {
    const initialState = {
      book: {},
      isBookFetching: true,
    };

    const action = {
      type: FETCH_BOOK_BY_ID_SUCCESS,
      payload: { volumeInfo: { title: "test" } },
    };

    expect(bookReducer(initialState, action)).toEqual({
      book: { title: "test" },
      isBookFetching: null,
    });
  });
  it("FETCH_BOOK_BY_ID_FAILURE", () => {
    const initialState = {
      isBookFetching: true,
      message: "",
    };

    const action = {
      type: FETCH_BOOK_BY_ID_FAILURE,
      payload: "err_message",
    };

    expect(bookReducer(initialState, action)).toEqual({
      isBookFetching: null,
      message: "err_message",
    });
  });
});
