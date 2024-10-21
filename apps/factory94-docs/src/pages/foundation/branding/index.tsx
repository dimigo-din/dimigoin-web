import { Flex, Typo } from "factory94";

export function FoundationBrandingPage() {
  return (
    <>
      <Flex direction="column">
        <Typo type="body" weight="strong">
          Foundation
        </Typo>
        <Typo type="display" weight="strong">
          Branding
        </Typo>
        <Typo type="paragraphLarge" color="content.standard.secondary">
          서비스 내에서 디미고인의 브랜딩을 나타내기 위한 브랜딩 문서입니다.
        </Typo>
      </Flex>
      <Flex mt="900" direction="column" gap="1000">
        {}
      </Flex>
    </>
  );
}
