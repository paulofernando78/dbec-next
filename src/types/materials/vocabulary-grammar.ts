interface SubstagesText {
    text: string
  }
  
  interface Substage {
    label: string;
    texts?: SubstagesText[]
  }
  
  interface Stage {
    label: string;
    bgColor: string;
    textColor: string;
    text: string;
    substages?: Substage[];
  }
  
  interface Whiteboard {
    title: string;
    subtitle: string;
    description: string[];
  }
  
  export interface VocabulayGrammarLessonDataProps {
    title: string;
    subtitle: string;
    description: string[];
    stages: Stage[];
    whiteboard: Whiteboard;
  }