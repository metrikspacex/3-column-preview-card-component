import "./styles/globals.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import ThreeColumnCard from "./components/three-column-card/three-column-card";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThreeColumnCard />
  </React.StrictMode>
);
