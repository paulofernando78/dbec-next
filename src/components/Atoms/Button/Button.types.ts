import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  toggle?: boolean;
  type?: "button" | "submit" | "reset";
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  imgSrc?: StaticImageData;
  imgAlt?: string;
  isActive: boolean;
}
