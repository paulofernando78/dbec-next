import { StaticImageData } from "next/image";

export interface FlipCardData {
  frontText?: string;
  backText?: string;
  imgSrc?: StaticImageData;
  imgAlt?: string;
  width?: string | number;
  height?: string | number;
}

export interface FlipCardsProps {
  flipCards: FlipCardData[];
  gridColumnWidth?: string;
}
