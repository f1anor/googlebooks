import { FETCH_BOOK_BY_ID_START } from "actionTypes";
import { FETCH_BOOK_BY_ID_FAILURE } from "actionTypes";
import { FETCH_BOOK_BY_ID_SUCCESS } from "actionTypes";
import { fetchBookByIdApi } from "api/book-api";

// Загружаем одну книгу для представления
export const fetchBookById = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_BOOK_BY_ID_START,
  });

  try {
    const ans = await fetchBookByIdApi(id);

    if (ans.status !== 200) throw new Error("Статус не 200");
    dispatch({
      type: FETCH_BOOK_BY_ID_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_BOOK_BY_ID_FAILURE,
      payload: err.message,
    });
  }
};
