import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import AppContextWrapper from "./Contexts/appContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextWrapper>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AppContextWrapper>
);
