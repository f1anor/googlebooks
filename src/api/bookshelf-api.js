// Получаем книги

import { instance } from "api";

// Получить первую порцию книг с учетом параметров
export const fetchBooksApi = async (search, category, sort) => {
  return instance.get(
    `/volumes?q=${search}${category ? "+subject:" + category : ""}${
      !!sort ? "&orderBy=" + sort : ""
    }&startIndex=0`
  );
};

// Получить следующие страницы книг с учетом параметров
export const fetchNextPageApi = async (page, search, category, sort) => {
  return instance.get(
    `/volumes?q=${search}${category ? "+subject:" + category : ""}${
      !!sort ? "&orderBy=" + sort : ""
    }&startIndex=${page * 30}`
  );
};
