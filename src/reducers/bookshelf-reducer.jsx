import { FETCH_BOOKS_FAILURE } from "actionTypes";
import { FETCH_NEXT_PAGE_SUCCESS } from "actionTypes";
import { CLEAR_BOOKS } from "actionTypes";
import { FETCH_NEXT_PAGE_FAILURE } from "actionTypes";
import { FETCH_NEXT_PAGE_START } from "actionTypes";
import { FETCH_BOOKS_SUCCESS } from "actionTypes";
import { FETCH_BOOKS_START } from "actionTypes";

const initialState = {
  books: {},
  booksOnPage: [],
  page: 0,
  totalCount: null,

  // Состояния
  isBooksFetching: null,

  // Ошибки
  message: "",
};

export const bookshelfReducer = (state = initialState, { type, payload }) => {
  let tmpObj = {};
  switch (type) {
    // Получаем книги
    case FETCH_BOOKS_START:
      return {
        ...state,
        isBooksFetching: true,
        booksOnPage: [],
        message: "",
      };
    case FETCH_BOOKS_SUCCESS:
      tmpObj = {};
      payload.items.forEach((item) => {
        tmpObj[item.id] = { id: item.id, ...item.volumeInfo };
      });

      return {
        ...state,
        totalCount: payload.totalItems,
        books: { ...tmpObj },
        booksOnPage: [...Object.keys(tmpObj)],
        isBooksFetching: null,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        isBooksFetching: null,
        message: payload,
      };

    // Получаем следующую страницу
    case FETCH_NEXT_PAGE_START:
      return {
        ...state,
        isBooksFetching: true,
        message: "",
      };
    case FETCH_NEXT_PAGE_SUCCESS:
      tmpObj = {};
      payload.items.forEach((item) => {
        tmpObj[item.id] = { id: item.id, ...item.volumeInfo };
      });
      return {
        ...state,
        page: state.page + 1,
        books: { ...state.books, ...tmpObj },
        booksOnPage: [...state.booksOnPage, ...Object.keys(tmpObj)],
      };
    case FETCH_NEXT_PAGE_FAILURE:
      return {
        ...state,
        isBooksFetching: null,
        message: payload,
      };

    case CLEAR_BOOKS:
      return {
        ...state,
        page: 0,
        books: {},
        booksOnPage: [],
        totalCount: null,
        message: "",
      };
    default:
      return state;
  }
};
