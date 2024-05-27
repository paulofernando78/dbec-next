import { StaticImageData } from "next/image";

export interface ArticlesProps {
  imgSrcBefore?: StaticImageData | string;
  altNameBefore?: string;
  enParagraph?: string;
  ptParagraph?: string;
  imgSrcAfter?: StaticImageData | string;
  altNameAfter?: string;
  smaller?: string

}
