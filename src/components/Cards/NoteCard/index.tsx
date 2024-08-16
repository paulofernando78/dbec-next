import { ReactNode } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { exclamationIcon } from "@/img/index";

interface NoteCardProps {
  children: ReactNode;
}

export const NoteCard = ({ children }: NoteCardProps) => {
  return (
    <div className={`line-break ${styles["card"]}`}>
      <div className="flex-8px-center">
        <Image src={exclamationIcon} alt="Exclamation mark" className="icon-general"/>
        <p className="bold">Notes</p>
      </div>
      <span className="p-font">{children}</span>
    </div>
  );
};
