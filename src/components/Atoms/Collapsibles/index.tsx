"use client";

// Hook
import { useState } from "react";

// Components
import { Card } from "@/components";

// CSS
import styles from "./styles.module.css";

// Typescript
import { CollapsibleProps } from "./type";

export const Collapsible = ({ label, children }: CollapsibleProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={styles["border"]}>
      <span
        onClick={toggleCollapse}
        className="cursor-pointer user-select-none"
      >
        <span className={`bold ${styles["plus-minus-position"]}`}>
          {isOpen ? "-" : "+"}{" "}
        </span>
        <b>{label}</b>
      </span>
      {isOpen && <span className="block margin-top">{children}</span>}
    </div>
  );
};
