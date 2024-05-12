import { ReactNode } from "react";
import Link from "next/link";
import style from "./CardDescription.module.css";

interface CardDescriptionProps {
  label: string;
  content: string;
  link?: string;
  linkLabel?: string
}

export const CardDescription = ({
  label,
  content,
  link,
  linkLabel,
}: CardDescriptionProps) => {
  return (
    <>
      <div className={style["card-description"]}>
        <div className={style["card-description-label"]}>
          <p>{label}</p>
        </div>
        <div className={style["card-description-content"]}>
          <p>{content}</p>
          {link && linkLabel && (
          <Link href={link}><p>{linkLabel}</p></Link>
          )}
        </div>
      </div>
    </>
  );
};
