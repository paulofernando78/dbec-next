interface Option {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface RadioItems {
  id: string;
  question: string;
  questionPt?: string;
  options: Option[];
}

export interface RadioProps {
  radio: RadioItems[];
  exerciseId: string;
  showFeedback: boolean;
}