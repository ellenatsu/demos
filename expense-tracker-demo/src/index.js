import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
