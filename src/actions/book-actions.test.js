import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { instanceBook } from "../api/index";
import { FETCH_BOOK_BY_ID_START } from "actionTypes";
import { FETCH_BOOK_BY_ID_SUCCESS } from "actionTypes";
import { fetchBookById } from "./book-actions";

const mock = new MockAdapter(instanceBook);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("book actions", () => {
  it("fetch books", () => {
    mock.reset();
    mock.onGet("1").reply(200, {
      data: { id: 1, volumeInfo: { title: "testTitle" } },
    });

    const expectedActions = [
      {
        type: FETCH_BOOK_BY_ID_START,
      },
      {
        type: FETCH_BOOK_BY_ID_SUCCESS,
        payload: {
          data: { id: 1, volumeInfo: { title: "testTitle" } },
        },
      },
    ];

    const store = mockStore({ book: {} });

    return store.dispatch(fetchBookById("1")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
