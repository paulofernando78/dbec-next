"use client";

// Hook
import { useState } from "react";

// CSS
import styles from "./Button.module.css";

// Typescript
import { ButtonProps } from "./type";

export const Button = ({ label, onClick, toggle }: ButtonProps) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (toggle) {
      setShow(!show);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button className={styles.pushable} onClick={handleClick}>
        <span className={styles.shadow}></span>
        <span className={styles.edge}></span>
        <span className={styles.front}>
          {typeof label === 'string' ? label : label}
          </span>
      </button>
      {toggle && show && <p>...</p>}
    </>
  );
};
