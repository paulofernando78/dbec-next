"use client";

import React from "react";
// Hooks
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// CSS
import styles from "./Button.module.css";

// Typescript
import { ButtonProps } from "./Button.types";

export const Button = ({
  label,
  onClick,
  isActive = false,
  type = "button",
  width = "40px",
  height = "40px",
  children,
  imgSrc,
  imgAlt,
}: ButtonProps) => {
  const [show, setShow] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Carregar o áudio quando o componente montar
  useEffect(() => {
    audioRef.current = new Audio("/assets/audio/click.mp3");
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  };

  const handleClick = () => {
    playSound();
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        type={type}
        style={{ minWidth: width, minHeight: height }}
        className={`${styles["btn"]} ${isActive ? styles["active"] : ""}`}
      >
        {label && <b>{label}</b>}
        {children}
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt || ""}
            width={24}
            height={24}
            className={styles["btn-img"]}
          />
        )}
      </button>
    </>
  );
};
