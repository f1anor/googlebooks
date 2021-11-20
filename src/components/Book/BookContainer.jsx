import { fetchBookById } from "actions/book-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookLoading } from "selectors/book-selectors";
import { getBook } from "selectors/book-selectors";
import { useQuery } from "utils";
import Book from "./Book";

const BookContainer = React.memo(({ ...props }) => {
  const query = useQuery().toString();
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLoading = useSelector((state) => getBookLoading(state));

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  const book = useSelector((state) => getBook(state));
  return <Book book={book} query={query} isLoading={isLoading} />;
});
export default BookContainer;
