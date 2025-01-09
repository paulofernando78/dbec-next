import React from "react";

// Components
import Image from "next/image";

// CSS
import styles from "./styles.module.css";

import { timeIcon } from "@/img/index";

// TypeScript
import { ContentProps } from "./type";
import { Ribbon } from "@/components/Molecules/Ribbon";

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
          {content.time && (
            <div className="flex-8px-center-wrap">
              <Image src={timeIcon} alt="Time icon" className="icon-general" />
              <p className="user-select-none">{content.time}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
