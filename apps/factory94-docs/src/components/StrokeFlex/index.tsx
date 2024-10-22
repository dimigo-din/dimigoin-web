import { Flex, type FlexProps } from "factory94";

export function StrokeFlex({ children, ...props }: FlexProps) {
  return (
    <Flex
      w="full"
      direction="column"
      alignItems="flex-start"
      borderWidth="2px"
      borderColor="line.divider"
      borderStyle="dashed"
      borderRadius="8px"
      {...props}>
      {children}
    </Flex>
  );
}
