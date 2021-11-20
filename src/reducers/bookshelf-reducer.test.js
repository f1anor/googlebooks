import { FETCH_BOOKS_SUCCESS } from "actionTypes";
import { FETCH_NEXT_PAGE_SUCCESS } from "actionTypes";
import { CLEAR_BOOKS } from "actionTypes";
import { FETCH_NEXT_PAGE_START } from "actionTypes";
import { FETCH_NEXT_PAGE_FAILURE } from "actionTypes";
import { FETCH_BOOKS_FAILURE } from "actionTypes";
import { FETCH_BOOKS_START } from "actionTypes";
import { bookshelfReducer } from "./bookshelf-reducer";

describe("bookshelf reducer", () => {
  it("FETCH_BOOKS_START", () => {
    const initialState = {
      booksOnPage: [],
      isBooksFetching: null,
    };

    const action = {
      type: FETCH_BOOKS_START,
    };

    expect(bookshelfReducer(initialState, action)).toEqual({
      isBooksFetching: true,
      booksOnPage: [],
      message: "",
    });
  });

  it("FETCH_BOOKS_SUCCESS", () => {
    const initialState = {
      books: {},
      booksOnPage: [],
      isBooksFetching: true,
      totalCount: 0,
    };

    const action = {
      type: FETCH_BOOKS_SUCCESS,
      payload: {
        totalItems: 3,
        items: [
          { id: 1, volumeInfo: { title: "test" } },
          { id: 2, volumeInfo: { title: "test" } },
          { id: 3, volumeInfo: { title: "test" } },
        ],
      },
    };

    expect(bookshelfReducer(initialState, action)).toEqual({
      isBooksFetching: null,
      booksOnPage: ["1", "2", "3"],
      books: {
        1: {
          id: 1,
          title: "test",
        },
        2: {
          id: 2,
          title: "test",
        },
        3: {
          id: 3,
          title: "test",
        },
      },

      totalCount: 3,
    });
  });

  it("FETCH_BOOKS_FAILURE", () => {
    const initialState = {
      isBooksFetching: true,
      message: "",
    };

    const action = {
      type: FETCH_BOOKS_FAILURE,
      payload: "err_message",
    };

    expect(bookshelfReducer(initialState, action)).toEqual({
      isBooksFetching: null,
      message: "err_message",
    });
  });

  it("FETCH_NEXT_PAGE_START", () => {
    const initialState = {
      booksOnPage: [],
      isBooksFetching: null,
    };

    const action = {
      type: FETCH_NEXT_PAGE_START,
    };

    expect(bookshelfReducer(initialState, action)).toEqual({
      isBooksFetching: true,
      booksOnPage: [],
      message: "",
    });
  });

  it("FETCH_NEXT_PAGE_SUCCESS", () => {
    const initialState = {
      booksOnPage: ["1", "2", "3"],
      books: {
        1: {
          id: 1,
          title: "test1",
        },
        2: {
          id: 2,
          title: "test2",
        },
        3: {
          id: 3,
          title: "test3",
        },
      },
      isBooksFetching: null,
      page: 1,
    };

    const action = {
      type: FETCH_NEXT_PAGE_SUCCESS,
      payload: {
        items: [
          { id: 4, volumeInfo: { title: "test4" } },
          { id: 5, volumeInfo: { title: "test5" } },
          { id: 6, volumeInfo: { title: "test6" } },
        ],
      },
    };

    expect(bookshelfReducer(initialState, action)).toEqual({
      isBooksFetching: null,
      page: 2,
      books: {
        1: {
          id: 1,
          title: "test1",
        },
        2: {
          id: 2,
          title: "test2",
        },
        3: {
          id: 3,
          title: "test3",
        },
        4: {
          id: 4,
          title: "test4",
        },
        5: {
          id: 5,
          title: "test5",
        },
        6: {
          id: 6,
          title: "test6",
        },
      },
      booksOnPage: ["1", "2", "3", "4", "5", "6"],
    });
  });

  it("FETCH_NEXT_PAGE_FAILURE", () => {
    const initialState = {
      isBooksFetching: true,
      message: "",
    };

    const action = {
      type: FETCH_NEXT_PAGE_FAILURE,
      payload: "message_err",
    };

    expect(bookshelfReducer(initialState, action)).toEqual({
      isBooksFetching: null,
      message: "message_err",
    });
  });

  it("CLEAR_BOOKS", () => {
    const initialState = {
      booksOnPage: ["1", "2", "3"],
    };

    const action = {
      type: CLEAR_BOOKS,
    };

    expect(bookshelfReducer(initialState, action)).toEqual({
      books: {},
      booksOnPage: [],
      page: 0,
      totalCount: null,
      message: "",
    });
  });
});
