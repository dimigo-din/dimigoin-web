import { Flex, Typo } from "factory94";
import type React from "react";

export function DocTitle({
  category,
  title,
  desc,
}: {
  category: string;
  title: string;
  desc: string | React.ReactNode;
}) {
  return (
    <Flex direction="column">
      <Typo type="body" weight="strong">
        {category}
      </Typo>
      <Typo type="display" weight="strong">
        {title}
      </Typo>
      <Typo type="paragraphLarge" color="content.standard.secondary">
        {desc}
      </Typo>
    </Flex>
  );
}
