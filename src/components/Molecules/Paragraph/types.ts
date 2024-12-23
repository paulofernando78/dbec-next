export interface Paragraph {
  keyword?: string;
  word: string;
  wordAudioSrc: string;
  text: string;
}

export interface ParagraphSection {
  paragraphs: Paragraph[];
  addBreakLine: boolean;
  imgSrc?: string;
  imgAlt?: string;
  imgPosition?: "left" | "right";
}

export interface ParagraphSectionsProps {
  paragraphSections?: ParagraphSection[];
}
