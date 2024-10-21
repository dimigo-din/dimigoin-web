import { Flex } from "@chakra-ui/react";
import { Typo } from "../typography";

export function Toast({
  content,
  leadingArea,
}: {
  content: string;
  leadingArea?: React.ReactNode;
}) {
  return (
    <Flex
      py="300"
      px="550"
      minW="280px"
      h="48px"
      justifyContent="center"
      alignItems="center"
      gap="200"
      borderWidth="1px"
      borderColor="line.outline"
      borderRadius="1000px"
      background="components.fill.standard.primary"
      boxShadow="toast">
      {leadingArea}
      <Typo type="callout">{content}</Typo>
    </Flex>
  );
}
