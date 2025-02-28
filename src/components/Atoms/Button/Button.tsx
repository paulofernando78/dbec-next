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
  type = "button",
  width = "35px",
  height = "35px",
  children,
  imgSrc,
  imgAlt,
}: ButtonProps) => {
  const [show, setShow] = useState(false);
  const [isActive, toggleActive] = useButtonContext();
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound();
    if (onClick) {
      onClick(e);
    }
  };

  const handleMouseDown = () => {
    toggleActive(true);
  }

  const handleMouseUp = () => {
    toggleActive(false);
  }

  const handleTouchStart = () => {
    toggleActive(true);
  }

  const handleTouchEnd = () => {
    toggleActive(false);
  }

  return (
    <>
      <button
        onClick={handleClick}
        type={type}
        style={{ minWidth: width, minHeight: height }}
        className={`${styles["btn"]} ${isActive ? styles["active"] : ""}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {label && <b>{label}</b>}
        {children}
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt || ""}
            width={22}
            height={22}
            className={styles["btn-img"]}
          />
        )}
      </button>
    </>
  );
};

function useButtonContext(): [boolean, (value: boolean) => void] {
  const [isActive, setIsActive] = useState(false);
  
  const toggleActive = (value: boolean) => {
    setIsActive(value);
  };

  return [isActive, toggleActive];
}

