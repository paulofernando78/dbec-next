import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Introduction } from "@/components/Celta/Introduction";
import { PreVocabulary } from "@/components/Celta/Listening/PreVocabulary";
// Images
import {
  cat1,
  debris1,
  spaceJunk1,
  stage1,
  track1,
  strategy1,
  sustainable1,
  disappoint1,
  occur1,
} from "@/img/index";
import { ListeningForGist } from "@/components/Celta/Listening/ListeningForGist";
import { ListeningForScan } from "@/components/Celta/Listening/ListeningForScan";
import { Paragraph } from "@/components/Celta/Listening/Paragraph";
import { AudioPlayer } from "@/components/Audioplayer";
import SwiperFraction, {
  SwiperFractionData,
} from "@/components/Swiper/Fraction";
import { FollowUp } from "@/components/Celta/Listening/FollowUp";
import { WrapUp } from "@/components/Celta/WrapUp";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { FlipCard } from "@/components/Cards/Flip";
import { Translation } from "@/components/Collapsibles/Translation/Translation";
import { FillInTheBlank } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrcLink:
      "https://gdb.voanews.com/01000000-0aff-0242-d2d6-08dcbb19ddcb_cx0_cy8_cw0_w1200_r1.jpg",
    imgAltLink: "...",
  },
  {
    imgSrcLink:
      "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAltLink: "...",
  },
];

const flipCards = [
  {
    imgSrc: disappoint1,
    imgAlt: "An image of a woman disappointed.",
  },
  {
    imgSrc: occur1,
    imgAlt: "An image of car accident.",
  },
  {
    imgSrc: track1,
    imgAlt: "Tracks of dinosaur.",
  },
  {
    imgSrc: sustainable1,
    imgAlt: "An image of sustainable.",
  },
  {
    imgSrc: debris1,
    imgAlt: "An image of debris scattered across a rough surface",
  },
  {
    imgSrc: stage1,
    imgAlt: "An image of parental stages.",
  },
  {
    imgSrc: strategy1,
    imgAlt: "An image of a chess pawn.",
  },
  {
    imgSrc: spaceJunk1,
    imgAlt: "An image of space junk floating in the darkness of space.",
  },
];

const fillInTheBlanks = [
  {
    options: true,
    width: "100px",
    title: "1. Fill in the blank with the correct word.",
    beforeBlank: "1. I hate to",
    correctAnswer: ["disappoint"],
    afterBlank: "you, but I'm just not interested.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "2. When exactly did the incident",
    correctAnswer: ["occur"],
    afterBlank: "?",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "3. The beach is criss-crossed with animal",
    correctAnswer: ["tracks"],
    afterBlank: ".",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "4. This type of farming is simply not",
    correctAnswer: ["sustainable"],
    afterBlank: "any more.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "5. A new version is in the final",
    correctAnswer: ["stages"],
    afterBlank: "of testing.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "6. Emergency teams are still clearing the",
    correctAnswer: ["debris"],
    afterBlank: "from the plane crash.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "7. I've cleared out all that old",
    correctAnswer: ["junk"],
    afterBlank: "in the attic.",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "8. We need to devise an effective long-term",
    correctAnswer: ["strategy"],
    afterBlank: ".",
    lineBreakAfter: true,
  },
];

export default function ChineseRocketBreaksUpInSpace() {
  return (
    <>
      <Whiteboard
        title="Skills"
        subtitle="Listening"
        descriptions={[
          "Chinese Rocket Breaks Up in Space, Releasing Hundreds of Debris Pieces",
        ]}
      />
      <div className="line-break">
        <Introduction>
          <p className="margin-bottom">
            Take a look at the pictures below. Swipe them to the right and
            answer the questions. / Watch the video and answer the question.
          </p>
          <SwiperFraction images={swiperFraction} />
        </Introduction>
        <PreVocabulary>
          <div className="line-break">
            <div className="flex-8px-center-wrap">
              <DictionaryCard
                keyword="debris"
                label="debris"
                audioSrc="/d/debris.mp3"
              />
              <DictionaryCard
                keyword="junk"
                label="space junk"
                audioSrc="/s/space-junk.mp3"
              />
              <DictionaryCard
                keyword="stage"
                label="stage"
                audioSrc="/s/stage.mp3"
              />
              <DictionaryCard
                keyword="track"
                label="track"
                audioSrc="/t/track.mp3"
              />
              <DictionaryCard
                keyword="strategy"
                label="strategy"
                audioSrc="/s/strategy.mp3"
              />
              <DictionaryCard
                keyword="sustainable"
                label="sustainable"
                audioSrc="/s/sustainable.mp3"
              />
              <DictionaryCard
                keyword="disappoint"
                label="disappoint"
                audioSrc="/d/disappoint.mp3"
              />
              <DictionaryCard keyword="occur" label="occur" audioSrc="/o/occur.mp3" />
            </div>
            <FlipCard flipCards={flipCards} />
            <FillInTheBlank questions={fillInTheBlanks} />
          </div>
        </PreVocabulary>
        <ListeningForGist />
        <AudioPlayer audioSrc="https://voa-audio-ns.akamaized.net/vle/2024/08/13/01000000-0aff-0242-f5cb-08dcbba87c1a.mp3" />
        <Paragraph number="1">
          <div className="line-break">
            <p>
              Experts say a Chinese rocket that recently helped launch 18
              satellites broke apart in space and created hundreds of pieces of
              debris.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="2">
          <div className="line-break">
            <p>
              Space traffic observation organizations said data showed part of a
              Chinese rocket came apart soon after making the satellite
              deployments. State media in China reported the satellites were
              carried to space aboard a Long March-6 rocket and reached orbit on
              August 6.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="3">
          <div className="line-break">
            <p>
              The satellites are part of a Chinese government-backed effort that
              seeks to provide high-speed internet services to people around the
              world. Such satellites operate from between 300 and 2,000
              kilometers above Earth. The area is known as low Earth orbit.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="4">
          <div className="line-break">
            <p>
              The project is expected to become a competitor to American
              technology company SpaceX, which offers its own satellite-based
              internet service. SpaceX has so far deployed about 5,500
              satellites for its Starlink service, Reuters news agency reports.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="5">
          <div className="line-break">
            <p>
              Several groups that continuously observe satellite and spacecraft
              traffic said the Chinese rocket stage that broke apart in space
              created at least 700 pieces of debris. The floating debris is also
              known as space junk. It can harm active spacecraft, other
              satellites and even the International Space Station (ISS).
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="6">
          <div className="line-break">
            <p>
              The group that launched the satellites is state-financed Shanghai
              Spacecom Satellite Technology. The company did not answer requests
              from Reuters for comment about the situation.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="7">
          <div className="line-break">
            <p>
              Some experts said the high level of debris had placed more than
              1,000 satellites and other orbiting objects at risk.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="8">
          <div className="line-break">
            <p>
              U.S. space-tracking company LeoLabs told Reuters it estimates the
              number of debris pieces created is likely over 900. The collection
              of debris sitting about 800 kilometers above Earth’s surface is
              expected to last several years, LeoLabs added.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="9">
          <div className="line-break">
            <p>
              Experts said it was not clear whether the rocket body's{" "}
              <mark>
                breakup was caused by a crash into another object or by an
                explosion of unused rocket fuel
              </mark>
              . The U.S. Space Command said early on in the event that at least
              300 pieces of debris had been created.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="10">
          <div className="line-break">
            <p>
              Audrey Schaffer is the vice president of strategy at
              space-tracking company Slingshot Aerospace. She told Reuters her
              team had estimated over 1,100 satellites and other space objects
              were likely at risk of hitting the Chinese rocket debris.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="11">
          <div className="line-break">
            <p>
              Schaffer noted, however, that about one-third of at-risk objects
              are active spacecraft and could probably move out of the way. The
              rest are believed to be uncontrollable pieces of existing space
              junk that would have no way of avoiding new debris.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="12">
          <div className="line-break">
            <p>
              In 2022, a Long March 6A rocket stage similarly broke apart in
              space and created hundreds of pieces of debris. That event led to
              criticism of China from Western countries and space sustainability
              campaigners. The groups have called on China to establish better
              controls for how it retires used rocket bodies.
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <Paragraph number="13">
          <div className="line-break">
            <p>
              "It's disappointing that the rocket had the same issue again,"
              Schaffer said. She added, "These kinds of debris-generating events
              that are potentially avoidable should not occur anymore."
            </p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <p>I'm Bryan Lynn.</p>
        <ListeningForScan>
          <p>• What happened to the Chinese rocket?</p>
          <p>• How many pieces of debris were created?</p>
          <p>• What are the potential risks of this debris?</p>
          <p>• How many satellites are at risk?</p>
          <p>• What caused the rocket to break apart?</p>
        </ListeningForScan>

        <FollowUp>
          <p>• Why is space debris dangerous?</p>
          <p>• What can be done to prevent space debris?</p>
          <p>• How might this issue affect future space missions?</p>
        </FollowUp>
        <WrapUp />
      </div>
    </>
  );
}
