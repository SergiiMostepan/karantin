import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import App from "./components/App";
import AppContainer from "./components/AppContainer";
import { store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store";
import "normalize.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
