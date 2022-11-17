import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";

//REDUCERS
import authReducer from "./features/authSlice";
import bugReducer from "./features/bugSlice";
import userReducer from "./features/userSlice";
import viewReducer from "./features/viewSlice";

const store = configureStore({
  reducer: {
    authReducer,
    bugReducer,
    userReducer,
    viewReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
