import React from "react";
import ReactDOM from "react-dom/client";

/* Redux */
import { Provider } from "react-redux";
import store, { persistor } from "./store";
/* Redux-persist */
import { PersistGate } from "redux-persist/integration/react";

/* Styles */
import "./index.css";
/* App */
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
