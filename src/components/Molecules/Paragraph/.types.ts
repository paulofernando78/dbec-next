interface Paragraph {
    keyword?: string;
    vocabulary: string;
    audioSrc: string;
    text: string;
  }
 
  interface ParagraphSection {
    paragraphs: Paragraph[]
  }

  export interface ParagraphSectionsProps {
    paragraphSections?: ParagraphSection[];
  }