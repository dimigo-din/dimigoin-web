import { StrictMode } from "react";

import setupLocatorUI from "@locator/runtime";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

export default {};
