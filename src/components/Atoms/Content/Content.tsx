import React from "react";

// Components
import { Ribbon, Time } from "@/components/index";

// CSS
import styles from "./styles.module.css";

// TypeScript
import { ContentProps } from "./Content.type";

export const Content = ({ contents }: ContentProps) => {
  return (
    <div className={`${styles["content-container"]}`}>
      <div className="margin-bottom">
        <Ribbon label="Contents" bgColor="Black" textColor="white" />
      </div>
      {contents.map((content, contentIndex) => (
        <div key={contentIndex} className="flex-8px-center-wrap">
          <a
            href={content.link}
            className={`p-font ${styles["margin-left"]}`}
            key={contentIndex}
          >
            {content.content}
          </a>
          {content.time && <Time time={content.time} />}
        </div>
      ))}
    </div>
  );
};
