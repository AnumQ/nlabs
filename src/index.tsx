import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import "./i18n"; // Import locale configuration
import Router from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
