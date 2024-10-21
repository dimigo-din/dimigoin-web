import { Link as ChakraLink } from "@chakra-ui/react";
import type { ThemeTypings } from "@chakra-ui/styled-system";
import { Link as ReactLink } from "react-router-dom";
import { TypoProperty } from "../typography";

export type LinkProps = {
  type?: keyof typeof TypoProperty;
  weight?: ThemeTypings["fontWeights"];
  color?: ThemeTypings["colors"];
  children: React.ReactNode;
  to?: string;
};

export function Link({
  type = "body",
  weight = "regular",
  color = "content.standard.primary",
  to,
  children,
}: LinkProps) {
  return (
    <ChakraLink
      fontSize={TypoProperty[type].fontSize}
      lineHeight={TypoProperty[type].lineHeight}
      fontWeight={weight}
      as={ReactLink}
      to={to}
      color={color}
      _hover={{
        textDecoration: "underline",
      }}>
      {children}
    </ChakraLink>
  );
}
