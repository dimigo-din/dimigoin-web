import React from "react";

import type { IconBaseProps } from "./icons";

import * as Icons from "./icons";

type IconName = keyof typeof Icons;
interface IconProps extends IconBaseProps {
  name: IconName;
}
const Icon = React.memo(({ name = "Default", fill = "none", size = 24 }: IconProps) => {
  const IconBase = Icons[name];
  return <IconBase fill={fill} size={size} />;
});

export { Icon };
export type { IconName };
