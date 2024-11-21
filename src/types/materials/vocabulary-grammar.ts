interface Instruction {
  instruction: string;
}

interface SubstagesText {
  text: string;
  instructions: Instruction[];
}

interface Substage {
  label: string;
  texts?: SubstagesText[];
}

interface Stage {
  label: string;
  bgColor: string;
  textColor: string;
  text: string;
  swiperImages?: {
    // Adicionando a propriedade swiperImages
    imgSrcLink: string;
    imgAltLink: string;
  }[]; // Array de objetos para cada imagem
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
