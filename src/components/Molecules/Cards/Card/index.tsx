// CSS
import styles from "./styles.module.css";

// Typescript
import { CardProps } from "./types";

export const Card = ({ cards, bgColor, textColor }: CardProps) => {
  return (
    <div
      className={styles["card"]}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {cards.map((card, index) => (
        <span key={index} className="p-font" dangerouslySetInnerHTML={{ __html: card.text}}>
        </span>
      ))}
    </div>
  );
};
