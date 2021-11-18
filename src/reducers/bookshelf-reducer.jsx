const initialState = {
  books: {},
  booksOnPage: {},
  page: 1,
  totalCount: null,

  // Состояния
  isBooksFetching: null,

  // Ошибки
  message: "",
};

export const bookshelfReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
