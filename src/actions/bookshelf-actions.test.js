import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { instance } from "../api/index";
import { FETCH_BOOKS_START } from "actionTypes";
import { FETCH_BOOKS_SUCCESS } from "actionTypes";
import { fetchBooks } from "./bookshelf-actions";
import { FETCH_NEXT_PAGE_START } from "actionTypes";
import { FETCH_NEXT_PAGE_SUCCESS } from "actionTypes";
import { fetchNextPage } from "./bookshelf-actions";
import { CLEAR_BOOKS } from "actionTypes";
import { clearBooks } from "./bookshelf-actions";

const mock = new MockAdapter(instance);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("bookshelf-actions", () => {
  it("fetch books", () => {
    mock.reset();
    mock
      .onGet("/volumes?q=search+subject:category&orderBy=newest&startIndex=0")
      .reply(200, {
        data: [{ id: "1" }, { id: "2" }, { id: "3" }],
        totalItems: 3,
      });

    const expectedActions = [
      {
        type: FETCH_BOOKS_START,
      },
      {
        type: FETCH_BOOKS_SUCCESS,
        payload: {
          totalItems: 3,
          data: [{ id: "1" }, { id: "2" }, { id: "3" }],
        },
      },
    ];

    const store = mockStore({ bookshelf: { page: 1 } });

    return store
      .dispatch(fetchBooks("search", "category", "newest"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("fetch next page", () => {
    mock.reset();
    mock
      .onGet("/volumes?q=search+subject:category&orderBy=newest&startIndex=30")
      .reply(200, {
        data: [{ id: "4" }, { id: "5" }, { id: "6" }],
      });

    const expectedActions = [
      {
        type: FETCH_NEXT_PAGE_START,
      },
      {
        type: FETCH_NEXT_PAGE_SUCCESS,
        payload: {
          data: [{ id: "4" }, { id: "5" }, { id: "6" }],
        },
      },
    ];

    const store = mockStore({ bookshelf: { page: 0 } });

    return store
      .dispatch(fetchNextPage("search", "category", "newest"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("set page size", () => {
    const expectedActions = [
      {
        type: CLEAR_BOOKS,
      },
    ];

    const store = mockStore({});

    store.dispatch(clearBooks());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
