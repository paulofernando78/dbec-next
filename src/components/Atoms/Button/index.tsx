"use client";

// Hook
import { useState } from "react";

// CSS
import styles from "./styles.module.css";

// Typescript
import { ButtonProps } from "./type";

export const Button = ({ label, onClick, toggle, type, width }: ButtonProps) => {
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
      <button className={styles["pushable"]} onClick={handleClick} type={type} style={{ width: width}}>
        <span className={styles["shadow"]}></span>
        <span className={styles["edge"]}></span>
        <span className={styles["front"]}>
          {typeof label === 'string' ? label : label}
          </span>
      </button>
      {toggle && show && <p>...</p>}
    </>
  );
};
