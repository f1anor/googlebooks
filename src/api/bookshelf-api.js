// Получаем книги

import { instance } from "api";

// TODO: Подключить аксиос
export const fetchBooksApi = async (query) => {
  return instance.get("/");
};
