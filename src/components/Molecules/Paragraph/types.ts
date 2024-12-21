export interface Paragraph {
  keyword?: string;
  word: string;
  wordAudioSrc: string;
  text: string;
}

export interface ParagraphSection {
  paragraphs: Paragraph[];
  addBreakLine: boolean;
  img?: string;
  imgAlt?: string;
}

export interface ParagraphSectionsProps {
  paragraphSections?: ParagraphSection[];
}
