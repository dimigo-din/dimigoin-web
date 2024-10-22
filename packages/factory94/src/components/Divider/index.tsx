import { Box, type BoxProps } from "@chakra-ui/react";
import { matcher } from "../../lib";

export function Divider({
  size = "small",
  ...props
}: {
  size: "small" | "medium" | "large";
} & BoxProps) {
  return (
    <Box
      w="full"
      bg="line.divider"
      h={matcher(size, {
        small: "1px",
        medium: "4px",
        large: "8px",
      })}
      {...props}
    />
  );
}
