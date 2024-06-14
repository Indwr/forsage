import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "src/Styles/tailwind.scss";
import "src/Styles/pagination.scss";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ContextProviders from "./Contexts/ContextProviders";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProviders>
      <App />
    </ContextProviders>
  </React.StrictMode>,
);
