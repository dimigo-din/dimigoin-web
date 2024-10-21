import { Flex, Link, Typo, VStack } from "factory94";

export function Sidebar() {
  return (
    <VStack
      pt="500"
      px="400"
      w="240px"
      minW="240px"
      h="full"
      alignItems="flex-start"
      gap="400"
      bg="background.standard.secondary"
      position="absolute"
      top="0"
      left="0"
      zIndex="4">
      <Flex direction="column">
        <Typo type="headline">Foundation</Typo>
        <Flex mt="200" pl="300" direction="column" gap="200">
          <Link to="/foundation/color" type="body">
            Color
          </Link>
          <Link to="/foundation/typo" type="body">
            Typography
          </Link>
          <Link to="/foundation/component" type="body">
            Component
          </Link>
          <Link to="/foundation/icon" type="body">
            Icon
          </Link>
          <Link to="/foundation/branding" type="body">
            Branding
          </Link>
        </Flex>
      </Flex>
      <Flex direction="column">
        <Typo type="headline">Components</Typo>
        <Flex mt="200" pl="300" direction="column" gap="200">
          <Link to="/components/button" type="body">
            Button
          </Link>
          <Link to="/components/text-button" type="body">
            TextButton
          </Link>
        </Flex>
      </Flex>
    </VStack>
  );
}
