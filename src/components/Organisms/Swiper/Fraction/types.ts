import { StaticImageData } from "next/image";

interface SwiperFractionImages {
  imgSrc?: StaticImageData | string;
  imgAlt?: string;
  imgSrcLink?: string;
  imgAltLink?: string;
}

export interface SwiperFractionProps {
  images: SwiperFractionImages[];
}