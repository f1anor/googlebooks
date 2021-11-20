import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { INIT_APP } from "actionTypes";
import { initApp } from "./app-actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("app actions", () => {
  it("set page size", () => {
    const expectedActions = [
      {
        type: INIT_APP,
      },
    ];

    const store = mockStore({});

    store.dispatch(initApp());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
