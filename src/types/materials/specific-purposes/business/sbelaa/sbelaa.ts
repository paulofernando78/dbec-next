interface RadioExercise {
    title?: string;
    question: string;
    options: { label: string; isCorrect: boolean }[];
  }
  
  interface Paragraph {
    speaker: string;
    text: string;
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