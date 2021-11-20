import React from "react";
import { Link } from "react-router-dom";
import css from "./Book.module.css";
import { ReactComponent as ArrowIcon } from "assets/svg/arrow-left-short.svg";
import Preloader from "common/Preloader/Preloader";

const Book = ({ book, query, isLoading }) => {
  const img = !!book && !!book.imageLinks && book.imageLinks.smallThumbnail;
  return (
    <>
      {!book.title && !!isLoading && <Preloader />}
      {!!book.title && (
        <div className={css.wrapper}>
          <div className={css.img}>
            <img src={img ? img : ""} alt={book.title} />
          </div>
          <div className={css.content}>
            <h2 className={css.title}>{book.title}</h2>
            <h4 className={css.authors}>
              {book.authors &&
                book.authors.map((item, index) => (
                  <span key={item + index}>
                    {item} {index !== book.authors.length - 1 ? ",  " : ""}
                  </span>
                ))}
            </h4>

            <p
              className={css.description}
              dangerouslySetInnerHTML={{ __html: book.description }}
            />

            <div className={css.categoriesWrapper}>
              {!!book.categories &&
                book.categories.map((item, index) => (
                  <div key={item + index} className={css.categorie}>
                    {item}
                  </div>
                ))}
            </div>
          </div>

          <Link to={`/?${query}`}>
            <button className={css.backButton}>
              <ArrowIcon />
              Back
            </button>
          </Link>
        </div>
      )}
    </>
  );
};
export default Book;
