export interface Paragraph {
  keyword?: string;
  word: string;
  wordAudioSrc: string;
  enText: string;
  ptText?: string
  addBreakLine?: boolean;
}

export interface ParagraphSection {
  paragraphs: Paragraph[];
  imgSrc?: string;
  imgAlt?: string;
  imgPosition?: "left" | "right";
}

export interface ParagraphSectionsProps {
  paragraphSections?: ParagraphSection[];
}
