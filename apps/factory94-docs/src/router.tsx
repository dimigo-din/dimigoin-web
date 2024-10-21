import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";
import { ButtonPage } from "./pages/button";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "components",
        children: [
          {
            path: "button",
            element: <ButtonPage />,
          },
        ],
      },
    ],
  },
]);
