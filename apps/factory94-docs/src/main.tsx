import setupLocatorUI from "@locator/runtime";
import { Factory94Provider } from "factory94";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Factory94Provider.React>
      <RouterProvider router={router} />
    </Factory94Provider.React>
  </StrictMode>,
);
