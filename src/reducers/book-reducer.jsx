import { FETCH_BOOK_BY_ID_FAILURE } from "actionTypes";
import { FETCH_BOOK_BY_ID_SUCCESS } from "actionTypes";
import { FETCH_BOOK_BY_ID_START } from "actionTypes";

const initialState = {
  book: {},

  // Состояния
  isBookFetching: null,

  // Ошибки
  message: "",
};

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Загружаем одну книгу
    case FETCH_BOOK_BY_ID_START:
      return {
        ...state,
        isBookFetching: true,
        book: {},
        message: "",
      };
    case FETCH_BOOK_BY_ID_SUCCESS:
      return {
        ...state,
        isBookFetching: null,
        book: payload.volumeInfo,
      };
    case FETCH_BOOK_BY_ID_FAILURE:
      console.log(payload);
      return {
        ...state,
        isBookFetching: null,
        message: payload,
      };

    default:
      return state;
  }
};
