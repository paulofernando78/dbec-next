"use client";
import { useState } from "react";

// CSS
import styles from "./styles.module.css";

import { Card } from "../../Cards/Card";

interface AnswerProps {
  children: React.ReactElement;
}

export const AnswerGist = ({ children }: AnswerProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Card>
        <span
          onClick={toggleCollapse}
          className="cursor-pointer user-select-none"
        >
          <span className={`bold ${styles["plus-minus-position"]}`}>
            {isOpen ? "-" : "+"}{" "}
          </span>
          <b>Answer for "Listening for Gist"</b>
        </span>
        {isOpen && <p className="block margin-top">{children}</p>}
      </Card>
    </>
  );
};
