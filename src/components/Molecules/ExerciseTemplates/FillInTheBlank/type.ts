export interface FillInTheBlankItems {
  title?: string;
  subtitle?: string;
  beforeBlank?: string;
  lineBreakBefore?: boolean;
  placeholder?: string;
  correctAnswer: string[];
  afterBlank: string;
  portuguese?: string;
  lineBreakAfter?: boolean;
  addHr?: boolean;
}

export interface FillInTheBlankProps {
  fillInTheBlank: FillInTheBlankItems[];
  display?: string;
}