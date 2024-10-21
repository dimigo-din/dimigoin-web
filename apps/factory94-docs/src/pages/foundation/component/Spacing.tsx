import { Box, Center, Flex, HStack, Typo, VStack } from "factory94";

function SpacingBox({
  spacing,
  bgColor = "solid.translucent.green",
  badgeColor = "solid.green",
  pxValue,
  isBenchmark = false,
  showBar = false,
}: {
  spacing: string;
  bgColor?: string;
  badgeColor?: string;
  pxValue: string;
  isBenchmark?: boolean;
  showBar?: boolean;
}) {
  return (
    <VStack>
      <Flex w="120px" h="120px" bg={bgColor} borderRadius="8px" position="relative" gap={spacing}>
        <Box w="full" h="full" bg="solid.white" />
        <Box w="full" h="full" bg="solid.white" />
        <Center w="full" h="full" position="absolute" top="0" left="0" zIndex="5">
          <Box py="50" px="12px" bg={badgeColor} borderRadius="400">
            <Typo type="footnote" weight="weak" color="solid.white">
              {pxValue}
            </Typo>
          </Box>
        </Center>
        {showBar && (
          <Center w="full" h="full" position="absolute" top="0" left="0" zIndex="3">
            <Center w={`var(--chakra-space-${spacing})`} h="24px">
              <Box w="2px" h="full" bg={badgeColor} borderRadius="full" />
              <Box w="full" h="2px" bg={badgeColor} />
              <Box w="2px" h="full" bg={badgeColor} borderRadius="full" />
            </Center>
          </Center>
        )}
        {isBenchmark && (
          <Center w="full" h="full" position="absolute" top="0" left="0" zIndex="5">
            <Box mt="auto" py="50" px="12px" bg="components.fill.inverted.secondary" borderRadius="400">
              <Typo type="footnote" weight="strong" color="solid.white">
                기준점
              </Typo>
            </Box>
          </Center>
        )}
      </Flex>
      <Typo type="footnote" weight="weak" color="content.standard.secondary">
        spacing.{spacing}
      </Typo>
    </VStack>
  );
}

export function FoundationComponentSpacing() {
  return (
    <VStack gap="800">
      <VStack w="full" alignItems="start" gap="0">
        <Typo type="title" weight="strong">
          Spacing
        </Typo>
        <Typo type="paragraphLarge" color="content.standard.secondary">
          요소 내에서 오토 레이아웃을 사용할 때의 간격 (Padding, Gap 혼용) 을 정의합니다.
          <br />
          간격 역시 요소 별로 사용하는 값이 다르기 때문에 Semantic 값 이 아닌, Primitive 값을 지향합니다.
        </Typo>
      </VStack>
      <VStack gap="800">
        <HStack>
          <SpacingBox spacing="50" pxValue="2" bgColor="solid.translucent.orange" badgeColor="solid.orange" />
          <SpacingBox spacing="100" pxValue="4" bgColor="solid.translucent.blue" badgeColor="solid.blue" isBenchmark />
          <SpacingBox spacing="150" pxValue="6" bgColor="solid.translucent.orange" badgeColor="solid.orange" />
          <SpacingBox spacing="200" pxValue="8" />
          <SpacingBox spacing="300" pxValue="12" />
          <SpacingBox spacing="400" pxValue="16" />
          <SpacingBox spacing="500" pxValue="20" />
          <SpacingBox spacing="550" pxValue="24" />
        </HStack>
        <HStack>
          <SpacingBox spacing="600" pxValue="28" />
          <SpacingBox spacing="700" pxValue="32" />
          <SpacingBox spacing="750" pxValue="36" />
          <SpacingBox spacing="800" pxValue="40" />
          <SpacingBox spacing="850" pxValue="48" showBar />
          <SpacingBox spacing="900" pxValue="64" showBar />
          <SpacingBox spacing="950" pxValue="72" showBar />
          <SpacingBox spacing="1000" pxValue="80" showBar />
        </HStack>
      </VStack>
    </VStack>
  );
}
