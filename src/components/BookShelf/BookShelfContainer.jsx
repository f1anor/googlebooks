import React, { useEffect } from "react";
import { fetchNextPage } from "actions/bookshelf-actions";
import { clearBooks } from "actions/bookshelf-actions";
import { fetchBooks } from "actions/bookshelf-actions";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCount } from "selectors/bookshelf-selectors";
import { getBooksById } from "selectors/bookshelf-selectors";
import { useQuery } from "utils";
import BookShelf from "./BookShelf";
import { getIsLoading } from "selectors/bookshelf-selectors";

// TODO: Доделать
const BookShelfContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const query = useQuery();

  // Получаем параметры
  const search = query.get("search");
  const category = query.get("category");
  const sort = query.get("sort");

  const books = useSelector((state) => getBooksById(state));
  const totalCount = useSelector((state) => getTotalCount(state));
  const isLoading = useSelector((state) => getIsLoading(state));

  // Получаем книги
  useEffect(() => {
    if (!search) return;

    dispatch(fetchBooks(search, category, sort));
  }, [dispatch, search, category, sort]);

  useEffect(() => {
    if (!!search) return;
    dispatch(clearBooks());
  }, [search, dispatch]);

  // Загружаем следующую порцию
  const handleLoadMore = () => {
    dispatch(fetchNextPage(search, category, sort));
  };

  return (
    <BookShelf
      books={books}
      totalCount={totalCount}
      handleLoadMore={handleLoadMore}
      isLoading={isLoading}
    />
  );
};
export default BookShelfContainer;
