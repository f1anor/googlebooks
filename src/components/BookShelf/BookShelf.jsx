import React from "react";
import BookCard from "./BookCard/BookCard";
import css from "./BookShelf.module.css";
import { ReactComponent as LoadButton } from "assets/svg/arrow-clockwise.svg";
import Preloader from "common/Preloader/Preloader";

const BookShelf = ({ books = [], totalCount, handleLoadMore, isLoading }) => {
  return (
    <>
      {!!isLoading && books.length === 0 && <Preloader />}
      {books.length > 0 && (
        <>
          {+totalCount > 0 && (
            <p className={css.count}>
              Found <span>{totalCount}</span> results
            </p>
          )}
          <div className={css.books}>
            {books.map((book, index) => (
              <BookCard book={book} key={index} />
            ))}
          </div>

          <div className={css.nextButtonWrapper}>
            <button onClick={handleLoadMore} className={css.nextButton}>
              <LoadButton />
              LOAD MORE
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default BookShelf;
