import React, { SFC } from "react";
import Router from "./router";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore.js";

const state = ConfigureStore();

const App: SFC = () => {
  return (
    <Provider store={state}>
      <Router />
    </Provider>
  );
};

export default App;
