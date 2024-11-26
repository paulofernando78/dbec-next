import { WhiteboardProps } from "@/components/Molecules/Whiteboard/type";
import { SwiperFractionProps } from "@/components/Organisms/Swiper/Fraction/types";
import { Question } from "@/components/Molecules/ExerciseTemplates/Radio/type";
import { ParagraphSection } from "@/components/Molecules/Paragraph/.types";

export interface LessonData {
  title: string;
  bgColor?: string;
  textColor?: string;
  paragraphSections?: ParagraphSection[];
  swiperFractionImages?: SwiperFractionProps["images"];
  radio?: Question[];
  audioSrc: string;
  videoSrc?: string;
}

export interface LessonTemplateProps {
  lessonData: {
    whiteboard?: WhiteboardProps | null;
    lessons: LessonData[];
  } | null;
  isUnderConstruction: boolean;
}
