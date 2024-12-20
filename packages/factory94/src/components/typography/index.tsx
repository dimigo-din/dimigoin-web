import type { ThemeTypings } from "@chakra-ui/styled-system";

import { Text } from "@chakra-ui/react";

export const TypoProperty: {
  [key: string]: {
    fontSize: ThemeTypings["fontSizes"];
    lineHeight: ThemeTypings["lineHeights"];
  };
} = {
  display: {
    fontSize: "display",
    lineHeight: "display",
  },
  title: {
    fontSize: "title",
    lineHeight: "title",
  },
  headline: {
    fontSize: "headline",
    lineHeight: "headline",
  },
  body: {
    fontSize: "body",
    lineHeight: "body",
  },
  callout: {
    fontSize: "callout",
    lineHeight: "callout",
  },
  footnote: {
    fontSize: "footnote",
    lineHeight: "footnote",
  },
  caption: {
    fontSize: "caption",
    lineHeight: "caption",
  },
  paragraphLarge: {
    fontSize: "paragraph.large",
    lineHeight: "paragraph.large",
  },
  paragraphSmall: {
    fontSize: "paragraph.small",
    lineHeight: "paragraph.small",
  },
};

export type TypographyProps = {
  type?: keyof typeof TypoProperty;
  weight?: ThemeTypings["fontWeights"];
  color?: ThemeTypings["colors"];
  wordBreak?: "normal" | "break-all" | "keep-all" | "break-word";
  children: React.ReactNode;
};

function Typography({
  type = "body",
  weight = "regular",
  color = "content.standard.primary",
  wordBreak = "keep-all",
  children,
}: TypographyProps) {
  const typoWeight = type === "paragraphLarnge" || type === "paragraphSmall" ? "weak" : weight;
  return (
    <Text
      fontSize={TypoProperty[type].fontSize}
      lineHeight={TypoProperty[type].lineHeight}
      fontWeight={typoWeight}
      wordBreak={wordBreak}
      color={color}>
      {children}
    </Text>
  );
}

const Typo = Typography;

// export default Typography;

export { Typography, Typo, Text };
