interface RadioExercise {
  title?: string;
  question: string;
  options: { label: string; isCorrect: boolean }[];
}

interface Text {
  keyword: string;
  vocabulary: string;
  text: string;
  audioSrc: string;
}

interface Paragraph {
  speaker: string;
  text: string;
  texts: Text[];
}

export interface LessonData {
  title: string;
  subtitle: string;
  descriptions: string[];
  audioSrc: string;
  lessonTitle: string;
  lessonDescription: string;
  paragraphs: Paragraph[];
  radioExercises: RadioExercise[];
}

export interface SbelaaLessonTemplateProps {
  data: LessonData;
}
