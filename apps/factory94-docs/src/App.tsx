import { SymbolLogo, Typography, VStack } from "factory94";

function App() {
  return (
    <VStack p={[950, 900]} alignItems="flex-start">
      <SymbolLogo type="color" size="40" />
      <Typography type="display" weight="strong" color="core.brand.primary">
        다람쥐 헌 쳇바퀴에 타고파.
      </Typography>
    </VStack>
  );
}

export default App;
