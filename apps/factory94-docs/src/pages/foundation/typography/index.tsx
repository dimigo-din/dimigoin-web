import { Flex, Grid, GridItem, HStack, Typo, VStack } from "factory94";

function TextGrid({
  title,
  desc,
  type,
  texts,
}: {
  title: string;
  desc: string;
  type: string;
  texts: [string, string, string];
}) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="500">
      <GridItem colSpan={1}>
        <Flex w="full" direction="column">
          <Typo type="headline" weight="strong">
            {title}
          </Typo>
          <Typo type="footnote" weight="weak" color="content.standard.teritary">
            {desc}
          </Typo>
        </Flex>
      </GridItem>
      <GridItem colSpan={1}>
        <Typo type={type} weight="weak" wordBreak="break-all">
          {texts[0]}
        </Typo>
      </GridItem>
      <GridItem colSpan={1}>
        <Typo type={type} weight="regular" wordBreak="break-all">
          {texts[1]}
        </Typo>
      </GridItem>
      <GridItem colSpan={1}>
        <Typo type={type} weight="strong" wordBreak="break-all">
          {texts[2]}
        </Typo>
      </GridItem>
    </Grid>
  );
}

export function TypoPage() {
  return (
    <>
      <Flex direction="column">
        <Typo type="body" weight="strong">
          Foundation
        </Typo>
        <Typo type="display" weight="strong">
          Typography
        </Typo>
        <Typo type="paragraphLarge" color="content.standard.secondary">
          서비스 내에서 일관된 글자를 제공할 수 있도록 명시된 글자 문서입니다.
          <br />
          SUIT Variable 폰트를 기본으로 사용하며, 대체제로 Inter Display 폰트를 사용합니다.
          <br />
          {/* 접근성을 위해 100%, 135% (iOS 최대), 150%, 200% (Android 최대) 의 배율로 나뉩니다. 디자인 시에는 100%을 기준으로 하여 사용합니다. */}
        </Typo>
      </Flex>
      <Flex mt="900" direction="column" gap="1000">
        <VStack alignItems="start" gap="0">
          <Typo type="title" weight="strong">
            스타일
          </Typo>
          <Typo type="paragraphLarge" color="content.standard.secondary">
            Factory 94 속 Paragraph를 제외한 모든 텍스트 스타일은 Weak (400), Regular (500, Strong (600)으로 분류됩니다.
            <br />
            기능 별 문맥과 컴포넌트 상황에 맞춰 각 스타일을 선택하여 사용해야 합니다.
          </Typo>
        </VStack>
        <VStack gap="20px">
          <TextGrid
            title="Display"
            desc="글자를 매우 크게 강조할 때 사용하는 글자 스타일입니다."
            type="display"
            texts={[
              "정립 반정립 종합 변증법의 논리적",
              "I read the news today, oh boy",
              "아무것도 하기 싫어, 우리는 그늘을",
            ]}
          />
          <TextGrid
            title="Title"
            desc="제목 등을 나타낼 때 사용하는 글자 스타일입니다."
            type="title"
            texts={[
              "구조를 일컫는 말이다. 변증법에 따라 철학적 논증을 수행한 인물로는 ",
              "About a lucky man who made the grade and though the news ",
              "찾았네, 태양에 댄 적도 없이 반쯤 타다가 말았네, 밤에 잠드는 남들은",
            ]}
          />
          <TextGrid
            title="Headline"
            desc="제목이나 주제 등을 나타낼 때 사용하는 글자 스타일입니다."
            type="headline"
            texts={[
              "단연 헤겔이 거명된다. 변증법은 대등한 위상을 지니는 세 범주의 병렬이 아니라, ",
              "was rather sad, well, I just had to laugh, I saw the photograph, he blew ",
              "돌고 도는 네 개의 계절, 우리는 끝이 없는 기나긴 하나의 계절, 지글지글 끓는",
            ]}
          />
          <TextGrid
            title="Body"
            desc="제목이나 주제 등을 나타낼 때 사용하는 글자 스타일입니다."
            type="body"
            texts={[
              "대립적인 두 범주가 조화로운 통일을 이루어 가는 수렴적 상향성을 구조적 특징으로 한다. 헤겔에게서 변증법은 논증의 방식임을 넘어, 논증 대상 자체의 존재 ",
              "his mind out in a car, he didn't notice that the lights had changed, A crowd of people stood and stared, they'd seen his face before,",
              "땅 위에 이름도 모를 꽃들이 피어나네, 식어버린 말을 지껄일 바엔 아무 말도 하지 말아요, 어쨌거나 달아나진 말아요, 오늘 하루를 살아남아요, 우리가 길을",
            ]}
          />
          <TextGrid
            title="Callout"
            desc="내용들을 나타낼 때 사용하는 글자 스타일입니다."
            type="callout"
            texts={[
              "방식이기도 하다. 즉 세계의 근원적 질서인 ‘이념'의 내적 구조도, 이념이 시공간적 현실로서 드러나는 방식도 변증법적이기에, 이념과 현실은 하나의 체계를 이루며, 이 두 차원의 ",
              "nobody was really sure if he was from the House of Lords, I saw a film today, oh boy, The English Army had just won the war, a crowd of people turned away",
              "헤매이는 시퍼런 봄의 날들은 아직 한가운데, 멈추지 말고 몸부림치며 기어가, 쏟아지는 파란 하늘과 아득하게 멀어지는 길, 너무 멀리까지 왔나 돌아갈 순 없을까 망설이던 찰나에  ",
            ]}
          />
          <TextGrid
            title="Footnote"
            desc="참고할 내용들을 나타낼 때 사용하는 글자 스타일입니다."
            type="footnote"
            texts={[
              "원리를 밝히는 철학적 논증도 변증법적 체계성을 지녀야 한다. 헤겔은 미학도 철저히 변증법적으로 구성된 체계 안에서 다루고자 한다. 그에게서 미학의 대상인 예술은 종교, 철학과 마찬가지로 ‘절대정신'의 한 형태이다. ",
              "But I just had to look, having read the book, I'd love to turn you on, woke up, fell out of bed, dragged a comb across my head, found my way downstairs and drank a cup, and looking up, ",
              "이글이글 타는 땅 위에 새까만 점이 되었네, 아찔해져, 시든 꿈을 뜯어먹지 말아요, 머뭇거리지도 말아요, 어쨌거나 달아나진 말아요, 오늘 하루를 살아남아요, 우리가 길을 헤매이는, 시퍼런 봄의 날들은 아직 한가운데, ",
            ]}
          />
          <TextGrid
            title="Caption"
            desc="부가적인 내용들을 나타낼 때 사용하는 글자 스타일입니다."
            type="caption"
            texts={[
              "절대정신은 절대적 진리인 ‘이념'을 인식하는 인간 정신의 영역을 가리킨다. 예술, 종교, 철학은 절대적 진리를 동일한 내용으로 하며, 다만 인식 형식의 차이에 따라 구분된다. 절대정신의 세 형태에 각각 대응하는 형식은 직관, 표상, 사유이다. ‘직관'은 주어진 물질적 대상을 감각적으로 지각하는 지성이고, ‘표상'은 물질적 대상의 ",
              "I noticed I was late, found my coat and grabbed my hat, made the bus in seconds flat, found my way upstairs and had a smoke, and somebody spoke and I went into a dream, I read the news today, oh boy, four thousand holes in Blackburn, Lancashire, and though the holes were rather small",
              "멈추지 말고 몸부림치며 기어가, 쏟아지는 파란 하늘과 아득하게 멀어지는 길, 우리는 이 몸에 흐르는, 새빨간 피의 온도로만 말하고 싶어, 차가운 혀로 날 비웃지는 말아줘, 이를 물고 참은 하루와 끊어질 듯 이어지는 길, 우리가 길을 헤매이는, 시퍼런 봄의 날들은 아직 한가운데, 멈추지 말고 몸부림치며 기어가, 쏟아지는 파란 하늘과",
            ]}
          />
          <HStack pt="800" w="full">
            <Grid templateColumns="repeat(4, 1fr)" gap="500">
              <GridItem colSpan={1}>
                <Flex w="full" direction="column">
                  <Typo type="headline" weight="strong">
                    Paragraph
                  </Typo>
                  <Typo type="footnote" weight="weak" color="content.standard.teritary">
                    줄글을 적을 때 사용하는 글자 스타일입니다.
                    <br />
                    Line Height는 Vertical Trim의 2.4배 입니다.
                  </Typo>
                </Flex>
              </GridItem>
              <GridItem colSpan={3}>
                <VStack w="full" gap="200">
                  <Typo type="paragraphLarge" wordBreak="break-all">
                    What makes you think, I'm not in love?, how could you know what's best for us? Why am I here
                    standing alone? 'Cause I thought, I thought you wanted to dance, Honestly, it's all about the
                    timing, I ain't mean to lead you on, because him and I got some things that we're trying but my
                    energy belongs to you
                  </Typo>
                  <Typo type="paragraphSmall" wordBreak="break-all">
                    이천 이년 이른 여름, 자홍색에 가까웠던, 내가 처음 만진 빨간 머리, 어린 나의 목을 감고, 바에서 춤을
                    췄던 fig, 넌 비단뱀 같았어, 날 가지고 노는걸 알어, 그래서 난 니가 좋아, 오래전의 얘기지만 내
                    무덤까진 못 가져갔네, 미친 그녀, 더 미친 나는 모든걸 다 주었네, 내 술도 마셔, 난 선명하게 이 밤을 다
                    기억할래, 내 몸을 모두 담궈도 fig, 난 눈물론 안 젖어, 날 가지고 노는걸 알어,
                  </Typo>
                </VStack>
              </GridItem>
            </Grid>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
}
