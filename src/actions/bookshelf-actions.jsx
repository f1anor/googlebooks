import {
  FETCH_BOOKS_START,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_NEXT_PAGE_START,
  FETCH_NEXT_PAGE_SUCCESS,
  FETCH_NEXT_PAGE_FAILURE,
  CLEAR_BOOKS,
} from "actionTypes";

import { fetchBooksApi, fetchNextPageApi } from "api/bookshelf-api";

// Загружаем книги
export const fetchBooks = (search, category, sort) => async (dispatch) => {
  dispatch({
    type: FETCH_BOOKS_START,
  });

  try {
    const ans = await fetchBooksApi(search, category, sort);
    console.log(ans);

    if (ans.status !== 200) throw new Error("Статус не 200");

    dispatch({
      type: FETCH_BOOKS_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    console.info(err.message);
    dispatch({
      type: FETCH_BOOKS_FAILURE,
      payload: err.message,
    });
  }
};

// Получить следующую порцию книг
export const fetchNextPage =
  (search, category, sort) => async (dispatch, getState) => {
    dispatch({
      type: FETCH_NEXT_PAGE_START,
    });

    const { page } = getState().bookshelf;

    try {
      const ans = await fetchNextPageApi(page + 1, search, category, sort);

      if (ans.status !== 200) throw new Error("Статус не 200");

      dispatch({
        type: FETCH_NEXT_PAGE_SUCCESS,
        payload: ans.data,
      });
    } catch (err) {
      console.info(err);

      dispatch({
        type: FETCH_NEXT_PAGE_FAILURE,
        payload: err.message,
      });
    }
  };

// Удаляем книги
export const clearBooks = () => (dispatch) => {
  dispatch({
    type: CLEAR_BOOKS,
  });
};
