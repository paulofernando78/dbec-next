import { BoardCard } from "@/components/Cards/BoardCard";
import SwiperFraction, {
  SwiperFractionImages,
} from "@/components/Swiper/Fraction";
import { VideoPlayer } from "@/components/VideoPlayer";

interface IntroductionProps {
  prompt: string
  swiperFraction: SwiperFractionImages[];
  videoSrc: string
}

export const Introduction = ({ prompt, swiperFraction, videoSrc }: IntroductionProps) => {
  return (
      <>
        <BoardCard label="Introduction" smallerLabel="(Contextualization)" bgColor="black" textColor="white" time="5-10'">
          <div className="line-break">
            <p>{prompt}</p>
            <SwiperFraction images={swiperFraction} />
            <VideoPlayer videoSrc={videoSrc} />
          </div>
        </BoardCard>
      </>
  );
};
