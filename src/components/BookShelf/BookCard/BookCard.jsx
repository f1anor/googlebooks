import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "utils";
import css from "./BookCard.module.css";

const BookCard = ({ book }) => {
  const query = useQuery();

  return (
    <Link to={`/book/${book.id}?${query.toString()}`} className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img
          src={!!book.imageLinks ? book.imageLinks.thumbnail : ""}
          alt={book.title}
        />
      </div>
      <div className={css.contentWrapper}>
        <div className={css.titles}>
          <h3>{book.title}</h3>
          <h4>
            {book.authors &&
              book.authors.map((item, index) => (
                <span key={item + index}>
                  {item} {index !== book.authors.length - 1 ? ",  " : ""}
                </span>
              ))}
          </h4>
        </div>
        <div className={css.ganre}>
          <h5>{book.categories}</h5>
        </div>
      </div>
    </Link>
  );
};
export default BookCard;
