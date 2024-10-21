import { Center, Flex, SymbolLogo, Typo } from "factory94";

export function Header() {
  return (
    <Flex
      px="550"
      w="full"
      h="72px"
      // bg="background.inverted.primary"
      bg="core.brand.primary"
      justifyContent="space-between"
      alignItems="center">
      <Center gap="150">
        <SymbolLogo type="mono" size="28" fill={["#fff", "#fff"]} /* fill={["#F4F4F5", "#202128"]} */ />
        <Typo type="title" weight="strong" color="solid.white" /* color="content.inverted.primary" */>
          Factory 94
        </Typo>
      </Center>
      {/* <Center></Center> */}
    </Flex>
  );
}
