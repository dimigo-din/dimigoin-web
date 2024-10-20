import { type ThemeConfig, extendTheme } from "@chakra-ui/react";

import { settings } from "./settings";
import { styles } from "./styles";

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "system",
  cssVarPrefix: "chakra",
};

export const factory94theme = extendTheme({
  ...settings,
  semanticTokens: {
    colors: settings.colors,
  },
  styles,
  config,
});

export default factory94theme;
