import { Box, Icon as Factory94Icon, Flex, Icons, Tooltip, Typo, VStack, Wrap, useToast } from "factory94";

export function FoundationIconPage() {
  const toast = useToast();

  return (
    <>
      <Flex direction="column">
        <Typo type="body" weight="strong">
          Foundation
        </Typo>
        <Typo type="display" weight="strong">
          Icon
        </Typo>
        <Typo type="paragraphLarge" color="content.standard.secondary">
          서비스 내에서 일관된 아이콘을 제공할 수 있도록 명시된 아이콘 문서입니다.
          <br />
          구글의 Material Symbols를 기반으로 합니다.
        </Typo>
      </Flex>
      <Flex mt="900" direction="column" gap="1000">
        <VStack w="full" alignItems="start" gap="0">
          <Typo type="title" weight="strong">
            Material Symbols
          </Typo>
          <Typo type="paragraphLarge" color="content.standard.secondary">
            Factory 94는 Material Symbols를 주 기호로 사용합니다. 시스템 구성 시 효율성을 위해 필요한 아이콘만
            컴포넌트화 되어있습니다.
            <br />
            기호 사용 시 Size 24dp, Weight 300, Rounded 옵션을 기반으로, 광학 보정을 일부 하여 사용합니다.
          </Typo>
        </VStack>
        <Wrap w="full" p="500" spacing="500">
          {Object.entries(Icons).map(([key, Icon]) => (
            <Tooltip
              key={key}
              label={key}
              placement="top"
              px="200"
              py="50"
              borderRadius="200"
              bg="content.standard.primary"
              color="content.inverted.primary">
              <Box
                onClick={() => {
                  // paste key to clipboard
                  navigator.clipboard.writeText(key);
                  toast({
                    id: "icon-clipboard",
                    content: "클립보드에 복사되었습니다!",
                    preventDuplicate: true,
                    leadingArea: (
                      <Factory94Icon name="Stack" size={24} fill="var(--chakra-colors-content-standard-primary)" />
                    ),
                  });
                }}>
                <Icon size={24} fill="var(--chakra-colors-content-standard-primary)" />
              </Box>
            </Tooltip>
          ))}
        </Wrap>
      </Flex>
    </>
  );
}
