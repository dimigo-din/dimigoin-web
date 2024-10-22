import { DocTitle } from "@/components/DocTitle";
import { StrokeFlex } from "@/components/StrokeFlex";
import { Divider, Flex } from "factory94";

export function AtomDividerPage() {
  return (
    <>
      <DocTitle
        category="Atom"
        title="Divider"
        desc="화면 내에서 영역이나 요소들을 분리하거나 구분할 때 사용하는 요소입니다."
      />
      <Flex mt="900" gap="1000">
        <StrokeFlex p="500" gap="550">
          <Divider size="large" />
          <Divider size="medium" />
          <Divider size="small" />
        </StrokeFlex>
      </Flex>
    </>
  );
}
