"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";
import { flipIcon, questionMarkGif } from "@/img/index";

interface FlipCard {
  frontText?: string;
  backText?: string;
  imgSrc?: StaticImageData;
  imgAlt?: string;
}

interface FlipCardsProps {
  flipCards: FlipCard[];
}

export const FlipCard = ({ flipCards }: FlipCardsProps) => {
  // Maintain a state object to track flipped state of each card
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const handleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle flip state
    }));
  };

  return (
    <div className="flex-8px-center-wrap">
      {flipCards.map((flipCard, index) => (
        <div key={index} className={styles["container"]}>
          <div
            onClick={() => handleFlip(index)}
            className={`img-border ${styles["card"]} ${flippedCards[index] ? styles.flipped : ""}`}
          >
            {/* Front */}
            <div className={styles["front"]}>
              <Image src={flipIcon} alt="Flip icon" className={styles["flip-icon"]}/>
              <Image
                src={questionMarkGif}
                alt="Question mark gif"
                className={styles["front-image"]}
              />
              {flipCard.frontText && <p className={styles["front-text"]}>{flipCard.frontText}</p>}
            </div>
            {/* Back */}
            <div className={styles["back"]}>
              {flipCard.backText && <p>{flipCard.backText}</p>}
              {flipCard.imgSrc && flipCard.imgAlt && (
                <Image layout="fill" src={flipCard.imgSrc} alt={flipCard.imgAlt} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
