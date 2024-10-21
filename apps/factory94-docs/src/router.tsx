import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";
import { ButtonPage } from "./pages/components/button";
import { ColorPage } from "./pages/foundation/color";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "foundation",
        children: [
          {
            path: "color",
            element: <ColorPage />,
          },
        ],
      },
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
