import { DocTitle } from "@/components/DocTitle";
import { StrokeFlex } from "@/components/StrokeFlex";
import { Button, Flex, HStack, Icon, VStack, matcher } from "factory94";

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
    <StrokeFlex p="500" gap="550">
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
        </VStack>
      ))}
    </StrokeFlex>
  );
}

export function AtomButtonPage() {
  return (
    <>
      <DocTitle
        category="Components"
        title="Button"
        desc="사용자에게 행동을 요구하거나 유도할 때 사용하는 요소입니다."
      />
      <Flex pt="900" gap="1000">
        <ButtonPreview />
      </Flex>
    </>
  );
}
