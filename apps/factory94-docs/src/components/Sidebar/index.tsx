import { Flex, Link, Typo, VStack } from "factory94";

function MenuItem({
  category,
  items = [],
}: {
  category: string;
  items: Array<[string, string]>; // [name, path]
}) {
  return (
    <Flex direction="column">
      <Typo type="headline">{category}</Typo>
      <Flex mt="200" pl="300" direction="column" gap="200">
        {items.map(([name, path], i) => (
          <Link key={i} to={path} type="body">
            {name}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}

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
      zIndex="20">
      <MenuItem
        category="Foundation"
        items={[
          ["Color", "/foundation/color"],
          ["Typography", "/foundation/typo"],
          ["Component", "/foundation/component"],
          ["Icon", "/foundation/icon"],
          ["Branding", "/foundation/branding"],
        ]}
      />
      <MenuItem
        category="Atom"
        items={[
          ["Divider", "/atom/divider"],
          ["Button", "/atom/button"],
        ]}
      />
      <MenuItem category="Inform" items={[["Toast", "/inform/toast"]]} />
    </VStack>
  );
}
