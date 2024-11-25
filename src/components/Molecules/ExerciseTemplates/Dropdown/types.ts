interface Option {
    value: string;
    label: string;
    correctAnswer: boolean;
  }
  
  interface DropdownQuestion {
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