interface Option {
    value: string;
    label: string;
    correctAnswer: boolean;
  }
  
  export interface DropdownQuestion {
    title?: string;
    subtitle?: string;
    width?: string;
    beforeOptions?: string;
    options?: Option[];
    afterOptions?: string;
    lineBreak?: boolean;
  }
  
  export interface DropdownProps {
    questions: DropdownQuestion[];
  }