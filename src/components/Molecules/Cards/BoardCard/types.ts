import { ReactNode } from "react";

export interface BoardCardProps {
    label: string;
    smallerLabel?: string;
    time?: string
    children: ReactNode;
    bgColor?: string;
    textColor?: string;
    width?: string
  }