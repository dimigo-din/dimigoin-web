export const matcher = <K extends string | number | symbol, V>(
  value: K,
  cases: Record<K, V> | (Partial<Record<K, V>> & { default: V }),
): V => {
  if (value in cases) {
    // Use a type assertion here
    return (cases as Record<K, V>)[value];
  }
  if ("default" in cases) {
    return cases.default;
  }
  throw new Error(`Unhandled; case: ${String(value)}`);
};
