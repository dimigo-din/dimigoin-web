import { Box, Center, Typo, VStack, Wrap } from "factory94";

function RadiusBox({
  radius,
  ballSize,
}: {
  radius: string;
  ballSize: string;
}) {
  return (
    <VStack>
      <Box w="96px" h="96px" bg="components.fill.standard.teritary" borderRadius={radius} position="relative">
        <Box
          w={ballSize}
          h={ballSize}
          borderRadius={radius}
          bg="solid.translucent.blue"
          position="absolute"
          bottom="0"
          right="0"
        />
      </Box>
      <Typo type="footnote" weight="weak">
        radius.{radius}
      </Typo>
    </VStack>
  );
}

export function FoundationComponentRadius() {
  return (
    <VStack gap="800">
      <VStack w="full" alignItems="start" gap="0">
        <Typo type="title" weight="strong">
          Radius
        </Typo>
        <Typo type="paragraphLarge" color="content.standard.secondary">
          컴포넌트 내 모서리 Radius 값을 정의합니다.
          <br />
          Radius의 경우, 컴포넌트별로 사용하는 값이 다르기 때문에 Semantic 값이 아닌, Primitive 값을 지향합니다.
          {/* <br />
            심미적으로 편안한 환경을 제공하기 위해, 디자인 시 Corner Smoothing 옵션을 활성화합니다. iOS 기본 값인 60%를
            사용합니다. */}
        </Typo>
      </VStack>
      <Center>
        <Wrap spacing="550">
          <RadiusBox radius="100" ballSize="8px" />
          <RadiusBox radius="200" ballSize="12px" />
          <RadiusBox radius="300" ballSize="16px" />
          <RadiusBox radius="400" ballSize="24px" />
          <RadiusBox radius="500" ballSize="28px" />
          <RadiusBox radius="600" ballSize="32px" />
          <RadiusBox radius="700" ballSize="40px" />
          <RadiusBox radius="800" ballSize="48px" />
        </Wrap>
      </Center>
    </VStack>
  );
}
