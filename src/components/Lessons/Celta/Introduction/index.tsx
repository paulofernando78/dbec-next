import { BoardCard } from "@/components/Cards/BoardCard";
import styles from "../../../Cards/BoardCard/styles.module.css";
import SwiperFraction, {
  SwiperFractionImages,
} from "@/components/Swiper/Fraction";
import { VideoPlayer } from "@/components/VideoPlayer";

interface BoardCardProps {
  prompt: string
  swiperFraction: SwiperFractionImages[];
  videoSrc: string
}

export const Introduction = ({ prompt, swiperFraction, videoSrc }: BoardCardProps) => {
  return (
      <>
        <BoardCard label="Introduction" smallerLabel="(Contextualization" bgColor="black" textColor="white" time="5-10'">
          <div className={`line-break ${styles["children"]}`}>
            <p>{prompt}</p>
            <SwiperFraction images={swiperFraction} />
            <VideoPlayer videoSrc={videoSrc} />
          </div>
        </BoardCard>
      </>
  );
};
