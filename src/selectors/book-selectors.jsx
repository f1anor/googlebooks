export const getBook = (state) => {
  return state.book.book;
};

export const getBookLoading = (state) => {
  return state.book.isBookFetching;
};

export const getBookError = (state) => {
  return state.book.message;
};
