export interface SwiperImage {
  imgSrcLink: string;
  imgAltLink: string;
}

export interface Paragraph {
  keyword?: string;
  word: string;
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

  swiperImages?: SwiperImage[];
  audioSrc?: string;
  videoSrc?: string;
}

export interface WhiteboardData {
  title: string;
  subtitle: string;
  description: string[];
}

export interface GenericLessonTemplateProps {
  lessonData: {
    whiteboard: WhiteboardData;
    lessons: Lesson[];
  };
}
