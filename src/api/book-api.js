import { instanceBook } from "api";

// Получить с сервера одну книгу
export const fetchBookByIdApi = async (id) => {
  return instanceBook.get(id);
};
