import { WhiteboardProps } from "@/components/Molecules/Whiteboard/type";
import { AudioPlayerProps } from "@/components/Atoms/AudioPlayer/types";
import { SwiperFractionProps } from "@/components/Organisms/Swiper/Fraction/types";
import { Question, RadioProps } from "@/components/Molecules/ExerciseTemplates/Radio/type";
import { ParagraphSection } from "@/components/Molecules/Paragraph/.types";

export interface LessonData {
  title: string;
  bgColor?: string;
  textColor?: string;
  paragraphSections?: ParagraphSection[]
  swiperFractionImages?: SwiperFractionProps["images"];
  radio?: Question[]
  audioSrc: AudioPlayerProps;
  videoSrc?: string;
}

export interface LessonTemplateProps {
  lessonData: {
    whiteboard: WhiteboardProps
    lessons: LessonData[];
  };
}
