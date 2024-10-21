export function customStrokeBG({
  strokeWidth = 1,
  strokeColor,
  strokeDashArray,
  strokeOffset = 0,
  strokeLinecap = "square",
  borderRadius = "0",
}: {
  strokeWidth?: number;
  strokeColor: string;
  strokeDashArray: number[];
  strokeOffset?: number;
  strokeLinecap?: "butt" | "round" | "square";
  borderRadius?: string;
}) {
  return `url('data:image/svg+xml,%3csvg width=\"100%25\" height=\"100%25\" xmlns=\"http://www.w3.org/2000/svg\"%3e%3crect width=\"100%25\" height=\"100%25\" fill=\"none\" stroke=\"${strokeColor}\" stroke-width=\"${strokeWidth}\" stroke-dasharray=\"${strokeDashArray.join("%2c ")}\" stroke-dashoffset=\"${strokeOffset}\" ${borderRadius ? `rx=\"${borderRadius}\" ry=\"${borderRadius}\" border-radius=\"${borderRadius}\"` : ""} stroke-linecap=\"${strokeLinecap}\"/%3e%3c/svg%3e')`;
}
