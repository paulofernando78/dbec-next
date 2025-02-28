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
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);
  const releaseSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize both audio files in a single useEffect
  useEffect(() => {
    clickSoundRef.current = new Audio("/assets/audio/button-clicked-sound.mp3");
    releaseSoundRef.current = new Audio(
      "/assets/audio/button-released-sound.mp3"
    );

    // Optional: Clean up audio objects when component unmounts
    return () => {
      clickSoundRef.current = null;
      releaseSoundRef.current = null;
    };
  }, []);

  const buttonClickedSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.play().catch((error) => {
        console.log("Click audio playback failed:", error);
      });
    }
  };

  const buttonReleasedSound = () => {
    if (releaseSoundRef.current) {
      releaseSoundRef.current.play().catch((error) => {
        console.log("Release audio playback failed:", error);
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  const handleMouseDown = () => {
    toggleActive(true);
    buttonClickedSound();
  };

  const handleMouseUp = () => {
    toggleActive(false);
    buttonReleasedSound();
  };

  const handleTouchStart = () => {
    toggleActive(true);
    buttonClickedSound();
  };

  const handleTouchEnd = () => {
    toggleActive(false);
    buttonReleasedSound();
  };

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
