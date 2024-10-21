import colors from "./colors";
import radii from "./radius";
import shadows from "./shadows";
import spacing from "./spacing";
import typography from "./typography";

export const settings = {
  radii,
  colors,
  ...typography,
  shadows,
  space: spacing,
};
