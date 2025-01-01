import { ReactNode } from "react";

export interface ButtonProps {
    label: string | ReactNode;
    onClick: () => void;
    toggle?: boolean;
}