"use client";

// Hook
import { useState } from "react";

// Component
import Image from "next/image";

// CSS
import styles from "./styles.module.css";

// Images / Icons
import { expandForward, expandDown } from "@/img/index";

// Typescript
import { CollapsibleProps } from "./type";

export const Collapsible = ({ label, children }: CollapsibleProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <span
        onClick={toggleCollapse}
        className="cursor-pointer user-select-none"
      >
        <span className={`bold ${styles["icons-position"]}`}>
          {isOpen ? (
            <Image
              src={expandDown}
              alt="Expand Down"
              className="icon-general"
              />
            ) : (
              <Image src={expandForward} alt="Expand Forward" 
              className="icon-general"
              />
          )}{" "}
        </span>
        <p className="display-inline">
          <b>{label}</b>
        </p>
      </span>
      {isOpen && <p className="block margin-top">{children}</p>}
    </div>
  );
};
