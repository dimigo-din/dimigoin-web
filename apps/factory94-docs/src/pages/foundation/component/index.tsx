import { Box, Center, Flex, Typo, VStack, Wrap } from "factory94";
import { FoundationComponentRadius } from "./Radius";
import { FoundationComponentSpacing } from "./Spacing";
import { FoundationComponentTip } from "./Tip";

export function FoundationComponentPage() {
  return (
    <>
      <Flex direction="column">
        <Typo type="body" weight="strong">
          Foundation
        </Typo>
        <Typo type="display" weight="strong">
          Component
        </Typo>
        <Typo type="paragraphLarge" color="content.standard.secondary">
          서비스 내의 요소들이 일관된 스타일을 가질 수 있도록 명시된 컴포넌트 문서입니다.
          <br />
          모서리 Radius, 레이아웃 Spacing (Padding, Gap) 을 포함합니다.
        </Typo>
      </Flex>
      <Flex mt="900" direction="column" gap="1000">
        <FoundationComponentRadius />
        <FoundationComponentSpacing />
        <FoundationComponentTip />
      </Flex>
    </>
  );
}
