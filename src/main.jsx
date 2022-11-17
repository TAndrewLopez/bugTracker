import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";

//REDUCERS
import authReducer from "./controllers/features/authSlice";
import bugReducer from "./controllers/features/bugSlice";
import userReducer from "./controllers/features/userSlice";

const store = configureStore({
  reducer: {
    authReducer,
    bugReducer,
    userReducer,
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
