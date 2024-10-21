import type { ThemeTypings } from "@chakra-ui/styled-system";

import { Button as ChakraButton } from "@chakra-ui/react";
import { matcher } from "../../lib/mathcer";
import { Typo } from "../typography";

export type ButtonTheme = "grayscale" | "accent" | "solid" | "status";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  theme?: ButtonTheme;
  style?: "primary" | "secondary";
  disabled?: boolean;
  label?: string;
  leadingArea?: React.ReactNode;
  trailingArea?: React.ReactNode;
}

const ButtonBGColor: Record<
  ButtonTheme,
  {
    primary: ThemeTypings["colors"];
    secondary: ThemeTypings["colors"];
  }
> = {
  grayscale: {
    primary: "components.fill.inverted.primary",
    secondary: "components.translucent.secondary",
  },
  accent: {
    primary: "core.brand.primary",
    secondary: "core.brand.teritary",
  },
  solid: {
    // TODO: 디자인 시스템에 구현 안되어있음
    primary: "content.solid.primary",
    secondary: "content.solid.secondary",
  },
  status: {
    primary: "core.status.negative",
    secondary: "core.status.translucent.negative",
  },
};

export function Button({
  type = "button",
  size = "medium",
  theme = "grayscale",
  style = "primary",
  disabled = false,
  label = "버튼",
  leadingArea,
  trailingArea,
}: ButtonProps) {
  return (
    <ChakraButton
      type={type}
      px={matcher(size, { small: 300, medium: 400, large: 500 })}
      py={matcher(size, { small: 150, medium: 300, large: 400 })}
      gap={matcher(size, { small: 100, medium: 150, large: 200 })}
      background={ButtonBGColor[theme][style]}
      borderRadius={size === "small" ? 300 : 400}
      opacity={!disabled ? 1 : 0.3}>
      {leadingArea}
      <Typo
        type={matcher(size, { small: "footnote", medium: "callout", large: "body" })}
        weight="strong"
        color={matcher(style, {
          primary: "content.inverted.primary",
          secondary: matcher(theme, {
            grayscale: "content.standard.primary",
            accent: "core.brand.primary",
            solid: "content.inverted.primary",
            status: "solid.pink",
          }),
        })}>
        {label}
      </Typo>
      {trailingArea}
    </ChakraButton>
  );
}
