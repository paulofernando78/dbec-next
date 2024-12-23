// CSS
import Image from "next/image";
import styles from "./styles.module.css";

// Images
import { clockIcon } from "@/img/index";

// Typescript
import { WhiteboardProps } from "./type";

export const Whiteboard = ({
  title,
  subtitle,
  descriptions = [],
  subDescription,
  time
}: WhiteboardProps) => {
  return (
    <div className={styles["container"]}>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
      {descriptions.map((description, index) => (
        <p key={index}>
          <b>{description}</b>
        </p>
      ))}
      {subDescription && <p className="p-size-small">{subDescription}</p>}
      {time &&
      <div className="flex-8px-center-wrap">
        <Image
        src={clockIcon}
        alt="Time icon"
        className={`icon-general ${styles["icon-time"]}`}
        />
        <p>{time}</p>
      </div>
      }
    </div>
  );
};
