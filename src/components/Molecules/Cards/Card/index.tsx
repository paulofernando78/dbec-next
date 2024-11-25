// CSS
import styles from "./styles.module.css";

// Typescript
import { CardProps } from "./Card.types";

export const Card = ({ children, bgColor, textColor }: CardProps) => {
  return (
    <div
      className={styles["card"]}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="p-font">{children}</span>
    </div>
  );
};
