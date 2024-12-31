// CSS
import styles from "./styles.module.css";

// Typescript
import { RibbonProps } from "./types";

export const Ribbon = ({
  label,
  time,
  bgColor = "defaultBgColor",
  textColor = "defaultTextColor",
  id
}: RibbonProps) => {
  return (
    <div
      className={styles["ribbon"]}
      style={{ backgroundColor: bgColor, color: textColor }}
      id={id}
    >
      <div className={styles["flex-space"]}>
        <p className="bold">{label}</p>
        <p className="p-size-smaller">{time}</p>
      </div>
    </div>
  );
};
