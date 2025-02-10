import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { IconContentProps } from "./type";

export const IconContent = ({ iconContents }: IconContentProps) => {
  return (
    <>
      {iconContents.map((iconContent, Index) => (
      <div key={Index}>
        <p>
        <Image
          src={iconContent.imgSrc}
          alt={iconContent.imgAlt}
          className={`icon-general ${styles["img-position"]}`}
        />
        {iconContent.content}
        {iconContent.content && iconContent.link && " "}
        {iconContent.link && (
          <Link href={iconContent.link}>{iconContent.linkLabel}</Link>
        )}
        </p>
      </div>
      ))}
    </>
  );
};
