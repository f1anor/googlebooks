import { INIT_APP } from "actionTypes";
import { appReducer } from "./app-reducer";

describe("app reducer", () => {
  it("APP_INIT", () => {
    const initialState = {
      init: false,
    };

    const action = {
      type: INIT_APP,
    };

    expect(appReducer(initialState, action)).toEqual({
      init: true,
    });
  });
});
