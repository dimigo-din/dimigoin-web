import { Header } from "@components/Header";
import { Typography, VStack } from "factory94";

export function HomePage() {
  return (
    <VStack w="full" h="full" bg="background.standard.secondary">
      <Header />
      <Typography type="display" weight="strong" color="core.brand.primary">
        다람쥐 헌 쳇바퀴에 타고파.
      </Typography>
    </VStack>
  );
}

export default HomePage;
