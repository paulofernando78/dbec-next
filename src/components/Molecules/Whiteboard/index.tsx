// CSS
import Image from "next/image";
import styles from "./styles.module.css";

// Images
import { timeIcon, ukFlagIcon, usaFlagIcon } from "@/img/index";

// Typescript
import { WhiteboardProps } from "./type";

export const Whiteboard = ({
  title,
  subtitle,
  descriptions = [],
  subDescription,
  time,
  usa,
  uk
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
      {time &&
      <div className="flex-8px-center-wrap">
        <Image
        src={timeIcon}
        alt="Time icon"
        className={`icon-general ${styles["icon-time"]}`}
        />
        <p>{time}</p>
      </div>
      }
      {usa &&
      <div className="flex-8px-center-wrap">
        <Image
        src={usaFlagIcon}
        alt="Time icon"
        className="icon-general"
        />
        <p>American English</p>
      </div>
      }
      {uk &&
      <div className="flex-8px-center-wrap">
        <Image
        src={ukFlagIcon}
        alt="Time icon"
        className="icon-general"
        />
        <p>British English</p>
      </div>
      }
    </div>
  );
};
