"use client";

// Hook
import { useState } from "react";

// CSS
import styles from "./Button.module.css";

// Typescript
import { ButtonProps } from "./Button";
import { Neumorphism } from "../Neumorphism";

const playsound = () => {
  const audio = new Audio("/assets//audio/click.mp3");
  audio.play();
};

export const Button = ({
  label,
  onClick,
  toggle,
  type,
  width,
}: ButtonProps) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    playsound();

    if (toggle) {
      setShow(!show);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <Neumorphism>
        <button onClick={handleClick} type={type} style={{ width: width }} className={styles["btn-customazation"]}>
          <b>{typeof label === "string" ? label : label}</b>
        </button>
        {toggle && show && <p>...</p>}
      </Neumorphism>
    </>
  );
};
