import { Box, Center, Flex, HStack, Icon, Typo, VStack } from "factory94";

function OuterSpace() {
  return (
    <Box w="48px" h="40px" position="relative" bg="solid.translucent.red">
      <Center w="full" h="full" position="absolute" top="0" left="0" zIndex="5">
        <Box py="50" px="12px" bg="solid.red" borderRadius="400">
          <Typo type="footnote" weight="weak" color="solid.white">
            48
          </Typo>
        </Box>
      </Center>
      <Center w="full" h="full" position="absolute" top="0" left="0" zIndex="3">
        <Center w="48px" h="24px">
          <Box w="2px" h="full" bg="solid.red" borderRadius="full" />
          <Box w="full" h="2px" bg="solid.red" />
          <Box w="2px" h="full" bg="solid.red" borderRadius="full" />
        </Center>
      </Center>
    </Box>
  );
}

function CustomButton({
  label,
  color,
  icon,
  isExpected,
}: {
  label: string;
  color: string;
  icon: React.ReactNode;
  isExpected?: boolean;
}) {
  return (
    <Center
      py={!isExpected ? "8px" : "0"}
      px="600"
      gap={!isExpected ? "9px" : "0"}
      borderRadius="300"
      position="relative">
      <Box opacity={isExpected ? "0.5" : undefined} zIndex="3">
        {icon}
      </Box>
      {isExpected && (
        <Box w="9px" h="40px" bg="solid.translucent.red" position="relative">
          <Center w="full" h="full" position="absolute" top="0" left="0" zIndex="5" opacity="1">
            <Box py="50" px="12px" bg="solid.red" borderRadius="400">
              <Typo type="footnote" weight="weak" color="solid.white">
                9
              </Typo>
            </Box>
          </Center>
        </Box>
      )}
      <Box opacity={isExpected ? "0.5" : undefined} zIndex="3">
        <Typo type="body" weight="weak" color="solid.white">
          {label}
        </Typo>
      </Box>
      <Box
        w="full"
        h="full"
        opacity={isExpected ? "0.5" : undefined}
        bg={color}
        borderRadius="300"
        position="absolute"
        top="0"
        left="0"
        zIndex="1"
      />
    </Center>
  );
}

export function FoundationComponentTip() {
  return (
    <VStack alignItems="start" gap="20px">
      <Typo type="headline" weight="strong">
        참고사항
      </Typo>
      <HStack w="full" gap="20px">
        <VStack
          p="550"
          w="full"
          alignItems="start"
          gap="550"
          borderRadius="400"
          borderWidth="1px"
          borderColor="line.outline"
          bg="components.fill.standard.primary">
          <Typo type="paragraphLarge" color="content.standard.secondary">
            일관성 있는 디자인 규칙을 위해, 기본적으로 4의 배수인 Spacing 토큰을 사용합니다.
          </Typo>
          <HStack gap="0">
            <CustomButton
              label="행동 1"
              color="solid.blue"
              icon={<Icon name="LocationOnFill" fill="var(--chakra-colors-solid-white)" size={20} />}
            />
            <OuterSpace />
            <CustomButton
              label="행동 2"
              color="solid.green"
              icon={<Icon name="LocationOnFill" fill="var(--chakra-colors-solid-white)" size={20} />}
            />
            <OuterSpace />
            <CustomButton
              label="행동 3"
              color="solid.purple"
              icon={<Icon name="LocationOnFill" fill="var(--chakra-colors-solid-white)" size={20} />}
            />
          </HStack>
        </VStack>
        <VStack
          p="550"
          w="full"
          alignItems="start"
          gap="550"
          borderRadius="400"
          borderWidth="1px"
          borderColor="line.outline"
          bg="components.fill.standard.primary">
          <Typo type="paragraphLarge" color="content.standard.secondary">
            다만, 광학 보정이 필요한 요소의 경우에는 예외적으로 토큰 외의 값을 허용합니다.
          </Typo>
          <HStack gap="850">
            <CustomButton
              label="행동 1"
              color="solid.blue"
              icon={<Icon name="LocationOnFill" fill="var(--chakra-colors-solid-white)" size={20} />}
              isExpected
            />
            <CustomButton
              label="행동 2"
              color="solid.green"
              icon={<Icon name="LocationOnFill" fill="var(--chakra-colors-solid-white)" size={20} />}
              isExpected
            />
            <CustomButton
              label="행동 3"
              color="solid.purple"
              icon={<Icon name="LocationOnFill" fill="var(--chakra-colors-solid-white)" size={20} />}
              isExpected
            />
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
