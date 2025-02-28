import type { StaticImageData } from "next/legacy/image";

export interface ButtonProps {
  label?: string;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
  toggle?: boolean;
  type?: "button" | "submit" | "reset";
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  imgSrc?: StaticImageData;
  imgAlt?: string;
  isActive?: boolean;
}
