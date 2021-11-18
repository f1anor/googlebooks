import {
  FETCH_BOOKS_START,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from "actionTypes";
import { fetchBooksApi } from "api/bookshelf-api";

// Загружаем книги
export const fetchBooks = (query) => async (dispatch) => {
  dispatch({
    type: FETCH_BOOKS_START,
  });

  try {
    const ans = await fetchBooksApi(query);

    dispatch({
      type: FETCH_BOOKS_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_BOOKS_FAILURE,
      payload: err.message,
    });
  }
};
