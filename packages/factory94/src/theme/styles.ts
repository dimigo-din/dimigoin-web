import type { Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: () => ({
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "'SUIT Variable', 'Inter Display', sans-serif",
      wordBreak: "keep-all",
    },
    "html, body, #root": {
      width: "100%",
      height: "100%",
    },
    body: {
      bg: "",
    },
  }),
};
