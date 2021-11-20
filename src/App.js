import React from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./configureStore";

import "./index.css";
import LayoutContainer from "components/LayoutContainer";

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <LayoutContainer />
      </HashRouter>
    </Provider>
  );
};

export default App;
