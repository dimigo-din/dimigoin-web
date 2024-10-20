import colors from "./colors";
import radii from "./radius";
import spacing from "./spacing";
import typography from "./typography";

export const settings = {
  radii,
  colors,
  ...typography,
  space: spacing,
};
