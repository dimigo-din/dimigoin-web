import { ChakraProvider } from "@chakra-ui/react";
import factory94theme from "./theme";

export const Factory94Provider = {
  React: ({ children }: { children: React.ReactNode }) => {
    return <ChakraProvider theme={factory94theme}>{children}</ChakraProvider>;
  },
};

export default Factory94Provider;
