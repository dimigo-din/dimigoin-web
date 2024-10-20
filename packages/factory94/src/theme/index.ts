import { type ThemeConfig, extendBaseTheme } from "@chakra-ui/react";

import { settings } from "./settings";
import { styles } from "./styles";

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "system",
  cssVarPrefix: "chakra",
};

export const factory94theme = extendBaseTheme({
  ...settings,
  semanticTokens: {
    colors: settings.colors,
  },
  styles,
  config,
});

export default factory94theme;
