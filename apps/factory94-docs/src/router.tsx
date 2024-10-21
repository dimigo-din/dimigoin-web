import { createBrowserRouter } from "react-router-dom";

import { ButtonPage } from "./pages/components/button";
import { BrandingPage } from "./pages/foundation/branding";
import { ColorPage } from "./pages/foundation/color";
import { ComponentPage } from "./pages/foundation/component";
import { IconPage } from "./pages/foundation/icon";
import { TypoPage } from "./pages/foundation/typography";
import { HomePage } from "./pages/home";

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
          {
            path: "typo",
            element: <TypoPage />,
          },
          {
            path: "component",
            element: <ComponentPage />,
          },
          {
            path: "icon",
            element: <IconPage />,
          },
          {
            path: "branding",
            element: <BrandingPage />,
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
