import { createBrowserRouter } from "react-router-dom";

import { FoundationButtonPage } from "./pages/components/button";
import { FoundationBrandingPage } from "./pages/foundation/branding";
import { FoundationColorPage } from "./pages/foundation/color";
import { FoundationComponentPage } from "./pages/foundation/component";
import { FoundationIconPage } from "./pages/foundation/icon";
import { FoundationTypoPage } from "./pages/foundation/typography";
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
            element: <FoundationColorPage />,
          },
          {
            path: "typo",
            element: <FoundationTypoPage />,
          },
          {
            path: "component",
            element: <FoundationComponentPage />,
          },
          {
            path: "icon",
            element: <FoundationIconPage />,
          },
          {
            path: "branding",
            element: <FoundationBrandingPage />,
          },
        ],
      },
      {
        path: "components",
        children: [
          {
            path: "button",
            element: <FoundationButtonPage />,
          },
        ],
      },
    ],
  },
]);
