interface LinkItem {
  link: string;
  linkLabel: string;
  time?: string;
  checkboxLink?: string;
  checkboxLabel?: string;
  globeLink?: string;
  globeLabel?: string;
}

export interface ContentItem {
  content?: string;
  applyHr?: boolean;
  showIndex?: boolean;
  links?: LinkItem[];
}

export interface CardContent {
  bgColor: string;
  textColor?: string;
  cardLabel?: string;
  contents: ContentItem[];
}

export interface MainContent {
  headerLabel?: string;
  cardContents?: CardContent[];
}

export interface Whiteboard {
  title: string;
  subtitle: string;
  descriptions?: string[];
  subDescription?: string;
}

export interface ContentCardProps {
  contentData: {
    whiteboard?: Whiteboard;
    contents: MainContent[];
  };
}
