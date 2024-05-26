import { StaticImageData } from "next/image";

export interface ArticlesProps {
  imgSrcBefore?: StaticImageData | string;
  altNameBefore?: string;
  enText?: string;
  ptText?: string;
  imgSrcAfter?: StaticImageData | string;
  altNameAfter?: string;
  smaller?: string

}
