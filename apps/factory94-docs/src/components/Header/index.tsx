import { Center, Flex, SymbolLogo, Typo } from "factory94";

export function Header() {
  return (
    <Flex
      px="550"
      w="full"
      h="72px"
      bg="background.standard.primary"
      justifyContent="space-between"
      alignItems="center">
      <Center gap="150">
        <SymbolLogo type="mono" size="28" />
        <Typo type="title" weight="strong">
          Factory 94
        </Typo>
      </Center>
    </Flex>
  );
}
