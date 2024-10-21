import { Sidebar } from "@/components/Sidebar";
import { Header } from "@components/Header";
import { Box, Flex, HStack, VStack } from "factory94";
import { Outlet } from "react-router-dom";

export function HomePage() {
  return (
    <VStack w="full" h="full" gap="0">
      <Header />
      <HStack w="full" h="full" gap="0" position="relative">
        <Sidebar />
        <VStack w="full" h="full" alignItems="flex-start" bg="background.standard.primary" pl="240px">
          <Box w="full" h="full" position="relative">
            <VStack w="full" h="full" alignItems="flex-start" position="absolute">
              <VStack w="full" h="full" alignItems="flex-start" tabIndex={-1}>
                <Flex w="full" h="full" overflow="scroll" direction="column">
                  <Box>
                    <Flex direction="column" p="600" minW="6xl" maxW="6xl" position="relative">
                      <Outlet />
                    </Flex>
                  </Box>
                </Flex>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default HomePage;
