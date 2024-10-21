import { DocTitle } from "@/components/DocTitle";
import { Center, Flex, Icon, Toast } from "factory94";

export function InformToastPage() {
  return (
    <>
      <DocTitle
        category="Inform"
        title="Toast"
        desc="유저가 앱을 사용 중일 때, 액션에 대한 결과나 알림을 전달할 때 사용하는 컴포넌트입니다."
      />
      <Flex mt="900" gap="1000">
        <Center p="1000" w="full" bg="components.fill.standard.secondary" borderRadius="600">
          <Toast
            content="레이블"
            leadingArea={<Icon name="Default" size={24} fill="var(--chakra-colors-solid-red)" />}
          />
        </Center>
      </Flex>
    </>
  );
}
