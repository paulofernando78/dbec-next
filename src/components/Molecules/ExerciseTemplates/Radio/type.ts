interface Option {
  isCorrect: boolean;
  label: string;
}

export interface RadioQuestion {
  title?: string;
  question: string;
  options: Option[];
}

export interface RadioProps {
  questions: RadioQuestion[];
}
