import { Box, Center, Flex, Text, Typo, VStack, Wrap } from "factory94";
import { TranslucentBG } from "./TranslucentBG";

function SolidColor({
  color,
  name,
  display,
  bordered,
}: {
  color: string;
  name: string;
  display?: string;
  bordered?: boolean;
}) {
  return (
    <VStack gap="16px">
      <Box
        w="160px"
        h="160px"
        bg={color}
        borderRadius="8px"
        borderWidth={bordered ? "1px" : undefined}
        borderColor="line.divider"
      />
      <Flex w="full" direction="column">
        <Typo weight="strong">{name}</Typo>
        <Typo type="footnote" weight="weak" color="content.standard.teritary">
          {display || color}
        </Typo>
      </Flex>
    </VStack>
  );
}

function TranslucentColor({
  color,
  name,
  display,
  isText,
}: {
  color: string;
  name: string;
  display?: string;
  isText?: boolean;
}) {
  return (
    <VStack gap="16px">
      <Center
        w="160px"
        h="160px"
        borderRadius="8px"
        borderWidth="1px"
        borderColor="line.divider"
        bg="background.standard.primary"
        position="relative">
        {!isText ? (
          <Box
            w="120px"
            h="120px"
            bg={color}
            borderWidth="1px"
            borderColor="line.outline"
            borderRadius="100"
            zIndex="1"
          />
        ) : (
          <Text color={color} fontSize="100px" fontWeight="800" letterSpacing="-2px" zIndex="1">
            가
          </Text>
        )}
        <Box w="80px" h="160px" position="absolute" top="0" right="0">
          <TranslucentBG />
          <TranslucentBG />
        </Box>
      </Center>
      <Flex w="full" direction="column">
        <Typo weight="strong">{name}</Typo>
        <Typo type="footnote" weight="weak" color="content.standard.teritary">
          {display || color}
        </Typo>
      </Flex>
    </VStack>
  );
}

function TranslucentLine({
  line,
  name,
}: {
  line: string;
  name: string;
}) {
  return (
    <VStack gap="16px">
      <Center
        w="160px"
        h="160px"
        borderRadius="8px"
        borderWidth="1px"
        borderColor="line.divider"
        bg="background.standard.primary"
        position="relative">
        <Box
          w="120px"
          h="120px"
          bg="background.standard.primary"
          outline="4px solid"
          outlineColor={line}
          borderRadius="100"
          zIndex="1"
        />
        <Box w="80px" h="160px" position="absolute" top="0" right="0">
          <TranslucentBG />
          <TranslucentBG />
        </Box>
      </Center>
      <Flex w="full" direction="column">
        <Typo weight="strong">{name}</Typo>
        <Typo type="footnote" weight="weak" color="content.standard.teritary">
          {line}
        </Typo>
      </Flex>
    </VStack>
  );
}

function SectionTitle({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <Center gap="400">
      <Typo type="title" weight="strong">
        {title}
      </Typo>
      <Typo type="paragraphLarge" color="content.standard.secondary">
        {desc}
      </Typo>
    </Center>
  );
}

export function FoundationColorPage() {
  return (
    <>
      <Flex direction="column">
        <Typo type="body" weight="strong">
          Foundation
        </Typo>
        <Typo type="display" weight="strong">
          Color
        </Typo>
        <Typo type="paragraphLarge" color="content.standard.secondary">
          서비스 내에서 영역 간 분명한 상태 구별과 요소 별로 계층을 구분하기 위해 명시된 컬러 문서입니다.
          <br />
          효율적인 컬러 사용을 위해 Scoping이 적용되어 있습니다.
        </Typo>
      </Flex>
      <Flex mt="900" direction="column" gap="1000">
        <VStack alignItems="flex-start" gap="850">
          <SectionTitle title="Solid" desc="단색 계열, 시스템 기본 컬러" />
          <Wrap spacing="550">
            <SolidColor color="solid.red" name="Red" bordered />
            <SolidColor color="solid.orange" name="Orange" />
            <SolidColor color="solid.yellow" name="Yellow" />
            <SolidColor color="solid.green" name="Green" />
            <SolidColor color="solid.blue" name="Blue" />
            <SolidColor color="solid.indigo" name="Indigo" />
            <SolidColor color="solid.purple" name="Purple" />
            <SolidColor color="solid.pink" name="Pink" />
            <SolidColor color="solid.brown" name="Brown" />
            <SolidColor color="solid.black" name="Black" bordered />
            <SolidColor color="solid.white" name="White" bordered />
          </Wrap>
          <Typo type="headline" weight="strong">
            Translucent
          </Typo>
          <Wrap spacing="550">
            <TranslucentColor color="solid.translucent.red" name="Red" />
            <TranslucentColor color="solid.translucent.orange" name="Orange" />
            <TranslucentColor color="solid.translucent.yellow" name="Yellow" />
            <TranslucentColor color="solid.translucent.green" name="Green" />
            <TranslucentColor color="solid.translucent.blue" name="Blue" />
            <TranslucentColor color="solid.translucent.indigo" name="Indigo" />
            <TranslucentColor color="solid.translucent.purple" name="Purple" />
            <TranslucentColor color="solid.translucent.pink" name="Pink" />
            <TranslucentColor color="solid.translucent.brown" name="Brown" />
          </Wrap>
        </VStack>
        <VStack alignItems="flex-start" gap="850">
          <SectionTitle title="Core" desc="상태, 브랜드 등 주요 컬러 (모드 변경 시에도 유지)" />
          <VStack alignItems="start" gap="20px">
            <Typo type="headline" weight="strong">
              Status
            </Typo>
            <Wrap spacing="550">
              <SolidColor color="core.status.negative" name="Negative" />
              <TranslucentColor color="core.status.translucent.negative" name="Negative Translucent" />
              <SolidColor color="core.status.warning" name="Warning" />
              <TranslucentColor color="core.status.translucent.warning" name="Warning Translucent" />
              <SolidColor color="core.status.positive" name="Positive" />
              <TranslucentColor color="core.status.translucent.positive" name="Positive Translucent" />
            </Wrap>
          </VStack>
          <VStack alignItems="start" gap="20px">
            <Typo type="headline" weight="strong">
              Brand
            </Typo>
            <Wrap spacing="550">
              <SolidColor color="core.brand.primary" name="Primary" />
              <TranslucentColor color="core.brand.secondary" name="Secondary" />
              <TranslucentColor color="core.brand.teritary" name="Teritary" />
            </Wrap>
          </VStack>
        </VStack>
        <VStack alignItems="flex-start" gap="850">
          <SectionTitle title="Background" desc="최하단 전경에 적용하는 컬러" />
          <Wrap spacing="550">
            <SolidColor color="background.standard.primary" name="Primary" bordered />
            <SolidColor color="background.standard.secondary" name="Secondary" bordered />
            <SolidColor color="background.standard.teritary" name="Teritary" bordered />
          </Wrap>
        </VStack>
        <VStack alignItems="flex-start" gap="850">
          <SectionTitle title="Content" desc="텍스트 및 글리프용 컬러" />
          <Wrap spacing="550">
            <TranslucentColor color="content.standard.primary" name="Primary" isText />
            <TranslucentColor color="content.standard.secondary" name="Secondary" isText />
            <TranslucentColor color="content.standard.teritary" name="Teritary" isText />
            <TranslucentColor color="content.standard.quaternary" name="Quaternary" isText />
          </Wrap>
        </VStack>
        <VStack alignItems="flex-start" gap="850">
          <SectionTitle title="Line" desc="오브젝트 구분자 및 아웃라인용 컬러" />
          <Wrap spacing="550">
            <TranslucentLine line="line.divider" name="Divider" />
            <TranslucentLine line="line.outline" name="Outline" />
          </Wrap>
        </VStack>
        <VStack alignItems="flex-start" gap="850">
          <SectionTitle title="Component" desc="컴포넌트 및 기타 프레임 채우기에 적용하는 컬러" />
          <VStack alignItems="start" gap="20px">
            <Typo type="headline" weight="strong">
              Fill
            </Typo>
            <Wrap spacing="550">
              <SolidColor
                color="components.fill.standard.primary"
                name="Primary"
                display="fill.standard.primary"
                bordered
              />
              <SolidColor
                color="components.fill.standard.secondary"
                name="Secondary"
                display="fill.standard.secondary"
                bordered
              />
              <SolidColor
                color="components.fill.standard.teritary"
                name="Teritary"
                display="fill.standard.teritary"
                bordered
              />
            </Wrap>
          </VStack>
          <VStack alignItems="start" gap="20px">
            <Typo type="headline" weight="strong">
              Translucent
            </Typo>
            <Wrap spacing="550">
              <TranslucentColor color="components.translucent.primary" name="Primary" display="translucent.primary" />
              <TranslucentColor
                color="components.translucent.secondary"
                name="Secondary"
                display="translucent.secondary"
              />
              <TranslucentColor
                color="components.translucent.teritary"
                name="Teritary"
                display="translucent.teritary"
              />
              <TranslucentColor
                color="components.translucent.interactive"
                name="Interactive"
                display="translucent.interactive"
              />
            </Wrap>
          </VStack>
          <VStack align="start" gap="20px">
            <Typo type="headline" weight="strong">
              Interactive
            </Typo>
            <Wrap spacing="550">
              <TranslucentColor color="components.interaction.hover" name="Hover" display="interaction.hover" />
              <TranslucentColor color="components.interaction.focused" name="Focused" display="interaction.focused" />
              <TranslucentColor color="components.interaction.pressed" name="Pressed" display="interaction.pressed" />
            </Wrap>
          </VStack>
        </VStack>
        <VStack alignItems="flex-start" gap="850">
          <SectionTitle title="Calender" desc="디미고 학사일정용 컬러 (Solid 계열에서 보정)" />
          <Wrap spacing="550">
            <SolidColor color="calendar.exam" name="각종시험" />
            <SolidColor color="calendar.home" name="전체귀가" />
            <SolidColor color="calendar.event" name="각종행사" />
            <SolidColor color="calendar.stay" name="전체잔류" />
            <SolidColor color="calendar.vacation" name="방학" />
          </Wrap>
        </VStack>
      </Flex>
    </>
  );
}
