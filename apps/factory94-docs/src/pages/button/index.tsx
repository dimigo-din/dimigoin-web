import { Box, Button, Flex, HStack, Icon, Typo, VStack, matcher } from "factory94";

function DefaultIcon({
  size,
  style,
  theme,
}: {
  size: "small" | "medium" | "large";
  style: "secondary" | "primary";
  theme: "grayscale" | "accent" | "status";
}) {
  return (
    <Icon
      name="Default"
      fill={matcher(style, {
        primary: "var(--chakra-colors-content-inverted-primary)",
        secondary: matcher(theme, {
          grayscale: "var(--chakra-colors-content-standard-primary)",
          accent: "var(--chakra-colors-core-brand-primary)",
          status: "var(--chakra-colors-solid-pink)",
        }),
      })}
      size={matcher(size, {
        small: 16,
        medium: 20,
        large: 24,
      })}
    />
  );
}

function ButtonPreview() {
  const size = ["large", "medium", "small"] as const;
  const theme = ["grayscale", "accent", "status"] as const;
  const style = ["secondary", "primary"] as const;

  return (
    <Flex
      my="700"
      direction="column"
      alignItems="flex-start"
      p="500"
      background={`url('data:image/svg+xml,%3csvg width=\"100%25\" height=\"100%25\" xmlns=\"http://www.w3.org/2000/svg\"%3e%3crect width=\"100%25\" height=\"100%25\" fill=\"none\" stroke=\"rgba(121, 123, 138, 0.32)\" stroke-width=\"1\" stroke-dasharray=\"10%2c 5\" stroke-dashoffset=\"2\" rx="8px" stroke-linecap=\"square\"/%3e%3c/svg%3e')`}
      gap="550">
      {size.map((s, i) => (
        <VStack alignItems="flex-start" gap="inherit" key={i}>
          {theme.map((t, j) => (
            <HStack gap="inherit" key={j}>
              <HStack gap="inherit">
                {style.map((st, l) => (
                  <>
                    <Button
                      key={l}
                      size={s}
                      theme={t}
                      style={st}
                      label="버튼"
                      leadingArea={<DefaultIcon size={s} style={st} theme={t} />}
                      trailingArea={<DefaultIcon size={s} style={st} theme={t} />}
                    />
                    <Button
                      key={l}
                      size={s}
                      theme={t}
                      style={st}
                      label="버튼"
                      leadingArea={<DefaultIcon size={s} style={st} theme={t} />}
                      trailingArea={<DefaultIcon size={s} style={st} theme={t} />}
                      disabled
                    />
                  </>
                ))}
              </HStack>
            </HStack>
          ))}
          {/* <HStack gap="inherit">
            <Button size={s} theme="grayscale" style="secondary" />
            <Button size={s} theme="grayscale" style="secondary" disabled />
            <Button size={s} theme="grayscale" style="primary" />
            <Button size={s} theme="grayscale" style="primary" disabled />
            <Button size={s} theme="accent" style="secondary" />
            <Button size={s} theme="accent" style="secondary" disabled />
            <Button size={s} theme="accent" style="primary" />
            <Button size={s} theme="accent" style="primary" disabled />
          </HStack>
          <HStack gap="inherit">
            <Button size={s} theme="status" style="secondary" />
            <Button size={s} theme="status" style="secondary" disabled />
            <Button size={s} theme="status" style="primary" />
            <Button size={s} theme="status" style="primary" disabled />
          </HStack> */}
        </VStack>
      ))}
    </Flex>
  );
}

export function ButtonPage() {
  return (
    <VStack w="full" h="full" alignItems="flex-start" tabIndex={-1}>
      <Flex w="full" h="full" overflow="scroll" direction="column">
        <Box>
          <Flex direction="column" p="600" minW="5xl" maxW="5xl" position="relative">
            <Flex direction="column">
              <Typo type="body" weight="strong">
                Components
              </Typo>
              <Typo type="display" weight="strong">
                Button
              </Typo>
              <Typo type="paragraphLarge" color="content.standard.secondary">
                사용자에게 행동을 요구하거나 유도할 때 사용하는 요소입니다.
              </Typo>
            </Flex>
            <ButtonPreview />
          </Flex>
        </Box>
      </Flex>
    </VStack>
  );
}
