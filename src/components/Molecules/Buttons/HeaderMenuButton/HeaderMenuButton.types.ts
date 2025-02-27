import { StaticImageData } from "next/image";

export interface HeaderMenuButtonProps {
  onClick: () => void;
  imgSrc: StaticImageData;
  imgAlt: string;
  isActive?: boolean;
}