// Получить книги

import { createSelector } from "reselect";

export const getBooks = (state) => {
  return state.bookshelf.books;
};

export const getBooksOnPage = (state) => {
  return state.bookshelf.booksOnPage;
};

export const getTotalCount = (state) => {
  return state.bookshelf.totalCount;
};

export const getIsLoading = (state) => {
  return state.bookshelf.isBooksFetching;
};

export const getBookshelfError = (state) => {
  return state.bookshelf.message;
};

// Получаем книги по ID
export const getBooksById = createSelector(
  getBooks,
  getBooksOnPage,
  (books, currentBooks) => {
    if (!currentBooks) return;
    return currentBooks.map((book) => {
      return books[book];
    });
  }
);
