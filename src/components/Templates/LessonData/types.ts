import { WhiteboardProps } from "@/components/Molecules/Whiteboard/type";
import { SwiperFractionProps } from "@/components/Organisms/Swiper/Fraction/types";
import { RadioQuestion } from "@/components/Molecules/ExerciseTemplates/Radio/type";
import { ParagraphSection } from "@/components/Molecules/Paragraph/types";
import { FlipCardData } from "@/components/Molecules/Cards/Flip/types";
import { DropdownQuestion } from "@/components/Molecules/ExerciseTemplates/Dropdown/types";
import { FillInTheBlanksQuestion } from "@/components/Molecules/ExerciseTemplates/FillInTheBlank/type";
import { CardData } from "@/components/Molecules/Cards/Card/types";

export interface LessonData {
  title: string;
  time: string;
  bgColor?: string;
  textColor?: string;
  subtitle: string;
  subtime: string;
  subBgColor?: string;
  subTextColor?: string;
  cards: CardData[];
  text: string;
  paragraphSections?: ParagraphSection[];
  swiperFractionImages?: SwiperFractionProps["images"];
  flipcards?: FlipCardData[];
  audioSrc?: string;
  videoSrc?: string;
  radio?: RadioQuestion[];
  dropdown?: DropdownQuestion[];
  fillInTheBlanks?: FillInTheBlanksQuestion[];
}

export interface LessonTemplateProps {
  lessonData: {
    whiteboard?: WhiteboardProps | null;
    lessons: LessonData[];
  } | null;
  isUnderConstruction: boolean;
}
