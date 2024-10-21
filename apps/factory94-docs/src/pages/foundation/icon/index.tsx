import { Flex, Typo } from "factory94";

export function FoundationIconPage() {
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
        {}
      </Flex>
    </>
  );
}
