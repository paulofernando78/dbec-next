"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";
import { flipIcon, questionMarkGif } from "@/img/index";

export interface FlipCardData {
  frontText?: string;
  backText?: string;
  imgSrc?: StaticImageData;
  imgAlt?: string;
  width?: string | number;
  height?: string | number;
}

interface FlipCardsProps {
  flipCards: FlipCardData[];
  gridColumnWidth?: string;
}

export const FlipCard = ({
  flipCards,
  gridColumnWidth = "180px",
}: FlipCardsProps) => {
  // Maintain a state object to track flipped state of each card
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle flip state
    }));
  };

  return (
    <div
      className={styles["flex"]}
      style={{ gridTemplateColumns: `repeat(auto-fit, ${gridColumnWidth})` }}
    >
      {flipCards.map((flipCard, index) => (
        <div
          key={index}
          className={styles["container"]}
          style={{
            width: flipCard.width || "180px",
            height: flipCard.height || "180px",
          }}
        >
          {/* handleFlip */}
          <div
            onClick={() => handleFlip(index)}
            className={`img-border ${styles["card"]} ${
              flippedCards[index] ? styles.flipped : ""
            }`}
          >
            {/* Front */}
            <div className={styles["front"]}>
              <Image
                src={flipIcon}
                alt="Flip icon"
                className={styles["flip-icon"]}
              />
              <Image
                src={questionMarkGif}
                alt="Question mark gif"
                className={styles["front-image"]}
              />
              <div className={`flex ${styles["front-text-padding"]}`}>
                <p>{index + 1}.</p>
                {flipCard.frontText && (
                  <p className={styles["front-text"]}>{flipCard.frontText}</p>
                )}
              </div>
            </div>
            {/* Back */}
            <div className={styles["back"]}>
              {flipCard.backText && <p>{flipCard.backText}</p>}
              {flipCard.imgSrc && flipCard.imgAlt && (
                <Image
                  layout="fill"
                  src={flipCard.imgSrc}
                  alt={flipCard.imgAlt}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
