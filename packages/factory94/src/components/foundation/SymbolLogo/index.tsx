import { useColorModeValue } from "@chakra-ui/react";
import ColorSymbol from "./ColorSymbol";
import MonoSymbol from "./MonoSymbol";
import OutlinedSymbol from "./OutlinedSymbol";

type SymbolProps = {
  type: "color" | "mono" | "outlined";
  size: string | number;
  fill?: [string, string];
};

export const SymbolLogo = ({ type, size, fill }: SymbolProps) => {
  const fillColor = useColorModeValue(fill?.[0], fill?.[1]);

  return (
    <>
      {type === "color" && <ColorSymbol size={size} />}
      {type === "mono" && <MonoSymbol size={size} fill={fillColor} />}
      {type === "outlined" && <OutlinedSymbol size={size} />}
    </>
  );
};
