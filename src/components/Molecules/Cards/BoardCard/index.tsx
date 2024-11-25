// CSS
import styles from "./styles.module.css";

// Typescript
import { BoardCardProps } from "./types";

export const BoardCard = ({
  label,
  smallerLabel,
  time,
  children,
  bgColor,
  textColor,
  width,
}: BoardCardProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: bgColor, color: textColor, width: width }}
      >
        <div className="flex-8px-space-between">
          <p><span className="bold">{label}</span> <span className="p-size-small">{smallerLabel}</span></p>
          <p className="p-size-smaller">{time}</p>
        </div>
      </div>
      <div className={`line-break ${styles["children"]}`}>{children}</div>
    </div>
  );
};
