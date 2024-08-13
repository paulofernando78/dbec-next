import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { BoardCard } from "@/components/Cards/BoardCard";
import { WarmUp } from "@/components/Celta/WarmUp";
import { Introduction } from "@/components/Celta/Introduction";
import { PreVocabulary } from "@/components/Celta/Listening/PreVocabulary";
import { ListeningForGist } from "@/components/Celta/Listening/ListeningForGist";
import { ListeningForScan } from "@/components/Celta/Listening/ListeningForScan";
import { Paragraph } from "@/components/Celta/Listening/Paragraph";
import { AudioPlayer } from "@/components/Audioplayer";
import SwiperFraction, { SwiperFractionData } from "@/components/Swiper/Fraction";
// Images
import { cat1, cat2, cat3 } from "@/img/index";


const swiperFraction: SwiperFractionData[] = [
  {
    imgSrc: cat1,
    imgAlt: "A cat picture 1",
  },
  {
    imgSrc: cat2,
    imgAlt: "A cat picture 2",
  },
  {
    imgSrc: cat3,
    imgAlt: "A cat picture 3",
  },
];

export default function Listening() {
  return (
    <>
      <Whiteboard title="Listening" subtitle="..." descriptions={["..."]} />
      <div className="line-break">
        <WarmUp>
          <p>...</p>
        </WarmUp>
        <Introduction>
          <p className="margin-bottom">Take a look at the pictures below. Swipe them to the right and answer the questions. / Watch the video and answer the question.</p>
          <SwiperFraction images={swiperFraction}/>
        </Introduction>
        <PreVocabulary>
          <p>...</p>
        </PreVocabulary>
        <ListeningForGist>
          <p>...</p>
        </ListeningForGist>
        <AudioPlayer audioSrc=""/>
        <Paragraph number="1">
          <p>...</p>
        </Paragraph>
        <Paragraph number="2">
          <p>...</p>
        </Paragraph>
        <ListeningForScan>
          <p>...</p>
        </ListeningForScan>
        <BoardCard
          label="Follow-up"
          bgColor="black"
          textColor="white"
          time="5'"
        >
          <p>...</p>
        </BoardCard>
        <BoardCard label="Wrap-up" bgColor="black" textColor="white" time="5'">
          <p>...</p>
        </BoardCard>
      </div>
    </>
  );
}
