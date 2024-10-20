import ColorSymbol from "./ColorSymbol";
import MonoSymbol from "./MonoSymbol";
import OutlinedSymbol from "./OutlinedSymbol";

type SymbolProps = {
  type: "color" | "mono" | "outlined";
  size: string | number;
};

export const SymbolLogo = (props: SymbolProps) => {
  return (
    <>
      {props.type === "color" && <ColorSymbol size={props.size} />}
      {props.type === "mono" && <MonoSymbol size={props.size} />}
      {props.type === "outlined" && <OutlinedSymbol size={props.size} />}
    </>
  );
};
