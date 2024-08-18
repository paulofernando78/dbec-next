import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { BoardCard } from "@/components/Cards/BoardCard";
import { WarmUp } from "@/components/Celta/WarmUp";
import { Introduction } from "@/components/Celta/Introduction";
import { PreVocabulary } from "@/components/Celta/Listening/PreVocabulary";
import { ListeningForGist } from "@/components/Celta/Listening/ListeningForGist";
import { ListeningForScan } from "@/components/Celta/Listening/ListeningForScan";
import { Paragraph } from "@/components/Celta/Listening/Paragraph";
import { AudioPlayer } from "@/components/Audioplayer";
import SwiperFraction, {
  SwiperFractionData,
} from "@/components/Swiper/Fraction";
// Images
import { cat1, cat2, cat3 } from "@/img/index";
import { FollowUp } from "@/components/Celta/Listening/FollowUp";
import { WrapUp } from "@/components/Celta/WrapUp";

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
        <WarmUp>
          <p>...</p>
        </WarmUp>
        <Introduction>
          <p className="margin-bottom">
            Take a look at the pictures below. Swipe them to the right and
            answer the questions. / Watch the video and answer the question.
          </p>
          <SwiperFraction images={swiperFraction} />
        </Introduction>
        <PreVocabulary>
          <p>debris – n. broken pieces of something</p>
          <p>junk – n. material that is no longer working or useful</p>
          <p>stage – n. a certain period of development</p>
          <p>track – v. to closely follow the movements of something</p>
          <p>strategy – n. a plan used to achieve something</p>
          <p>
            sustainable – adj. causing little or no damage to the environment
            over a period of time
          </p>
          <p>
            disappoint – v. to fail to fulfill the hopes or expectations of
            someone
          </p>
          <p>occur – v. to happen</p>
        </PreVocabulary>
        <ListeningForGist />
        <AudioPlayer audioSrc="https://voa-audio-ns.akamaized.net/vle/2024/08/13/01000000-0aff-0242-f5cb-08dcbba87c1a.mp3" />
        <Paragraph number="1">
          <p>
            Experts say a Chinese rocket that recently helped launch 18
            satellites broke apart in space and created hundreds of pieces of
            debris.
          </p>
        </Paragraph>
        <Paragraph number="2">
          <p>
            Space traffic observation organizations said data showed part of a
            Chinese rocket came apart soon after making the satellite
            deployments. State media in China reported the satellites were
            carried to space aboard a Long March-6 rocket and reached orbit on
            August 6.
          </p>
        </Paragraph>
        <Paragraph number="3">
          <p>
            The satellites are part of a Chinese government-backed effort that
            seeks to provide high-speed internet services to people around the
            world. Such satellites operate from between 300 and 2,000 kilometers
            above Earth. The area is known as low Earth orbit.
          </p>
        </Paragraph>
        <Paragraph number="4">
          <p>
            The project is expected to become a competitor to American
            technology company SpaceX, which offers its own satellite-based
            internet service. SpaceX has so far deployed about 5,500 satellites
            for its Starlink service, Reuters news agency reports.
          </p>
        </Paragraph>
        <Paragraph number="5">
          <p>
            Several groups that continuously observe satellite and spacecraft
            traffic said the Chinese rocket stage that broke apart in space
            created at least 700 pieces of debris. The floating debris is also
            known as space junk. It can harm active spacecraft, other satellites
            and even the International Space Station (ISS).
          </p>
        </Paragraph>
        <Paragraph number="6">
          <p>
            The group that launched the satellites is state-financed Shanghai
            Spacecom Satellite Technology. The company did not answer requests
            from Reuters for comment about the situation.
          </p>
        </Paragraph>
        <Paragraph number="7">
          <p>
            Some experts said the high level of debris had placed more than
            1,000 satellites and other orbiting objects at risk.
          </p>
        </Paragraph>
        <Paragraph number="8">
          <p>
            U.S. space-tracking company LeoLabs told Reuters it estimates the
            number of debris pieces created is likely over 900. The collection
            of debris sitting about 800 kilometers above Earth’s surface is
            expected to last several years, LeoLabs added.
          </p>
        </Paragraph>
        <Paragraph number="9">
          <p>
            Experts said it was not clear whether the rocket body's{" "}
            <mark>
              breakup was caused by a crash into another object or by an
              explosion of unused rocket fuel
            </mark>
            . The U.S. Space Command said early on in the event that at least
            300 pieces of debris had been created.
          </p>
        </Paragraph>
        <Paragraph number="10">
          <p>
            Audrey Schaffer is the vice president of strategy at space-tracking
            company Slingshot Aerospace. She told Reuters her team had estimated
            over 1,100 satellites and other space objects were likely at risk of
            hitting the Chinese rocket debris.
          </p>
        </Paragraph>
        <Paragraph number="11">
          <p>
            Schaffer noted, however, that about one-third of at-risk objects are
            active spacecraft and could probably move out of the way. The rest
            are believed to be uncontrollable pieces of existing space junk that
            would have no way of avoiding new debris.
          </p>
        </Paragraph>
        <Paragraph number="12">
          <p>
            In 2022, a Long March 6A rocket stage similarly broke apart in space
            and created hundreds of pieces of debris. That event led to
            criticism of China from Western countries and space sustainability
            campaigners. The groups have called on China to establish better
            controls for how it retires used rocket bodies.
          </p>
        </Paragraph>
        <Paragraph number="13">
          <p>
            "It's disappointing that the rocket had the same issue again,"
            Schaffer said. She added, "These kinds of debris-generating events
            that are potentially avoidable should not occur anymore."
          </p>
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
