export interface Paragraph {
  keyword?: string;
  dictionary: string;
  dictionaryAudioSrc: string;
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
