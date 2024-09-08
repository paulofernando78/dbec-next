import { AudioPlayer } from "@/components/Audioplayer";
import { BoardCard } from "@/components/Cards/BoardCard";
import { Paragraph, ParagraphData } from "@/components/Paragraph";
import { VideoPlayer } from "@/components/VideoPlayer";

interface ListeningGistProps {
  prompt: string;
  audioSrc: string
  videoSrc?: string
  paragraphs: ParagraphData[];
}

export const ListeningGist = ({ prompt, audioSrc, videoSrc, paragraphs }: ListeningGistProps) => {
  return (
    <>
      <BoardCard
        label="Listening for Gist"
        smallerLabel="(Main ideia)"
        bgColor="black"
        textColor="white"
        time="5-10'"
      >
        <div className="line-break">
          <p>{prompt}</p>
          <AudioPlayer audioSrc={audioSrc} />
          {videoSrc && <VideoPlayer videoSrc={videoSrc} />}
          <Paragraph paragraphs={paragraphs} />
        </div>
      </BoardCard>
    </>
  );
};
