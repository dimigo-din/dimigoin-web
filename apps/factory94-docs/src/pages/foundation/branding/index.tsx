import { DocTitle } from "@/components/DocTitle";
import { Center, Flex, SymbolLogo, Typo, VStack } from "factory94";

export function FoundationBrandingPage() {
  const types = ["color", "outlined", "mono"] as const;
  const sizes = [100, 80, 72, 64, 48, 36, 32, 24, 16, 12] as const;

  return (
    <>
      <DocTitle
        category="Foundation"
        title="Branding"
        desc="서비스 내에서 디미고인의 브랜딩을 나타내기 위한 브랜딩 문서입니다."
      />
      <Flex mt="900" direction="column" gap="1000">
        <VStack w="full" alignItems="start" gap="0">
          <Typo type="title" weight="strong">
            디미고인 브랜딩
          </Typo>
          <Typo type="paragraphLarge" color="content.standard.secondary">
            디미고인의 브랜딩은 디미고인의 "인"을 영어로 상징화한 것으로, 19기 손승욱 선배님이 리브랜딩한 로고를
            최소한의 시각적 보정을 거쳐 현재까지 유지하고 있습니다.
            <br />
            서비스 내에서 디미고인 브랜딩을 사용해야 할 때, 반드시 아래의 컴포넌트를 변형 없이 사용해야 합니다.
          </Typo>
        </VStack>
        <VStack py="850" px="500" w="full" alignItems="start" gap="850">
          {types.map((type) => (
            <Center key={type} gap="850">
              {sizes.map((size) => (
                <SymbolLogo
                  key={size}
                  type={type}
                  size={size}
                  fill={
                    type === "mono"
                      ? [
                          "var(--chakra-colors-content-standard-primary)",
                          "var(--chakra-colors-content-standard-primary)",
                        ]
                      : undefined
                  }
                />
              ))}
            </Center>
          ))}
        </VStack>
      </Flex>
    </>
  );
}
