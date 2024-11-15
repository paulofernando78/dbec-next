import { StaticImageData } from "next/image";

export interface Content {
  content?: string;
  applyHr?: boolean;
  link?: string;
  linkLabel?: string;
  checkboxLink?: string;
  checkboxLabel?: string;
  globeLink?: string;
  globeLabel?: string;
  courseImg?: StaticImageData;
  courseLink?: string;
  courseLabel?: string;
}

export interface CardContent {
  bgColor: string;
  textColor?: string;
  cardLabel?: string;
  contents: Content[];
}

export interface MainContent {
  headerLabel?: string;
  cardContents: CardContent[];
}

export interface ContentCardProps {
  contents: MainContent[];
}
