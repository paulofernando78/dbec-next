export interface Paragraph {
    keyword?: string;
    vocabulary: string;
    audioSrc: string;
    text: string;
    textBold: string;
  }
 
  export interface ParagraphSection {
    paragraphs: Paragraph[]
  }

  export interface ParagraphSectionsProps {
    paragraphSections?: ParagraphSection[];
  }