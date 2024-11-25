// CSS
import styles from "./styles.module.css";

// Typescript
import { RibbonProps } from "./types";

export const Ribbon = ({ label, bgColor, textColor }: RibbonProps) => {
  return (
    <div
      className={styles["ribbon"]}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <p className="bold">{label}</p>
    </div>
  );
};
