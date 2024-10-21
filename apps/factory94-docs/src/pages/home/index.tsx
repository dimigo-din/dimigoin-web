import { Sidebar } from "@/components/Sidebar";
import { Header } from "@components/Header";
import { Box, HStack, VStack } from "factory94";
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
              <Outlet />
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default HomePage;
