import { INIT_APP } from "actionTypes";

export const initApp = () => (dispatch) => {
  dispatch({
    type: INIT_APP,
  });
};
