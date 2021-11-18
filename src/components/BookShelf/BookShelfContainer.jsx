import { fetchBooks } from "actions/bookshelf-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "selectors/bookshelf-selectors";
import { useQuery } from "utils";
import BookShelf from "./BookShelf";

const BookShelfContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const query = useQuery().toString();
  const books = useSelector((state) => getBooks(state));

  useEffect(() => {
    dispatch(fetchBooks(query));
  }, [dispatch, query]);
  return <BookShelf books={books} />;
};
export default BookShelfContainer;
