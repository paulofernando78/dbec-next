"use client";

import React from "react";
// Hooks
import { useState, useEffect, useRef } from "react";

// CSS
import styles from "./Button.module.css";

// Typescript
import { ButtonProps } from "./ButtonProps";

export const Button = ({
  label,
  onClick,
  toggle,
  type = "button",
  width,
  height
}: ButtonProps) => {
  const [show, setShow] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/audio/click.mp3");
  }, []);

  const playsound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  };

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
      <button
        onClick={handleClick}
        type={type}
        style={{ width: width, height: height }}
        className={styles["btn-customization"]}
      >
        {label && <b>{label}</b>}
      </button>
      {toggle && show && <p>...</p>}
    </>
  );
};
