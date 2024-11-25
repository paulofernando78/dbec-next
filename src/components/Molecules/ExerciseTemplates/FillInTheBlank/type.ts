interface FillInTheBlanksData {
    options: boolean;
    width?: string;
    title?: string;
    subtitle?: string;
    beforeBlank?: string;
    lineBreakBefore?: boolean;
    placeholder?: string;
    correctAnswer: string[];
    afterBlank: string;
    portuguese?: string;
    lineBreakAfter?: boolean;
  }
  
  export interface FillInTheBlankProps {
    questions: FillInTheBlanksData[];
    display?: string;
  }