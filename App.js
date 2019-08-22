import React, { Fragment } from "react";

import { Provider } from "react-redux";

import Navigation from "./app/config/router";
import configureStore from "./app/store/index";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
