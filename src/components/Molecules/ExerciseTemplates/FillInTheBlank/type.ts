export interface FillInTheBlanksQuestion {
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
    addHr: string
  }
  
  export interface FillInTheBlankProps {
    questions: FillInTheBlanksQuestion[];
    display?: string;
  }