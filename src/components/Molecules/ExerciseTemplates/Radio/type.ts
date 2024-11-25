interface Option {
    isCorrect: boolean;
    label: string;
  }
  
  interface Question {
    title?: string;
    question: string;
    options: Option[];
  }
  
  export interface RadioProps {
    questions: Question[];
  }