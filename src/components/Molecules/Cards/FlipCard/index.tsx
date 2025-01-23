"use client";

// Hooks
import React, { useState } from "react";

// CSS
import styles from "./styles.module.css";

// Images
import Image from "next/image";
import { flipIcon, questionMarkGif } from "@/img/index";

// Typescript
import { FlipCardsProps } from "./types";

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
            className={`img-customization ${styles["card"]} ${
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
              <p className={styles["front-font"]}>{index + 1}</p>
              <Image
                src={questionMarkGif}
                alt="Question mark gif"
                className={styles["front-image"]}
              />
              <div className={`flex ${styles["front-text-padding"]}`}>
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
