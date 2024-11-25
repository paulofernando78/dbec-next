import { AudioPlayerProps } from "@/components/Atoms/AudioPlayer/types";
import { SwiperFractionProps } from "@/components/Organisms/Swiper/Fraction/types";

export interface Paragraph {
  keyword?: string;
  vocabulary: string;
  audioSrc: string;
  text: string;
}

interface ParagraphSection {
  paragraphs?: Paragraph[];
}

export interface Lesson {
  title: string;
  bgColor?: string;
  textColor?: string;
  paragraphSections?: ParagraphSection[];
  swiperFractionImages?: SwiperFractionProps["images"];
  audioSrc: AudioPlayerProps;
  videoSrc?: string;
}

export interface WhiteboardData {
  title: string;
  subtitle: string;
  description: string[];
}

export interface LessonTemplateProps {
  lessonData: {
    whiteboard: WhiteboardData;
    lessons: Lesson[];
  };
}
