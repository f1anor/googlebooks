import { INIT_APP } from "actionTypes";

const initialState = {
  init: false,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_APP:
      return {
        ...state,
        init: true,
      };
    default:
      return state;
  }
};
