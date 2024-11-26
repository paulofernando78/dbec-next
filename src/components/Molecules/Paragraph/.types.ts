export interface Paragraph {
    keyword?: string;
    dictionary: string;
    dictionaryAudioSrc: string;
    text: string;
  }
 
  export interface ParagraphSection {
    paragraphs: Paragraph[]
    addBreakLine: boolean
  }

  export interface ParagraphSectionsProps {
    paragraphSections?: ParagraphSection[];
  }