// CSS
import styles from "./styles.module.css";

// Typescript
import { SubRibbonProps } from "./types";

export const SubRibbon = ({
  sublabel,
  subtime,
  subBgColor = "defaultBgColor",
  subTextColor = "defaultTextColor",
}: SubRibbonProps) => {
  return (
    <div
      className={styles["ribbon"]}
      style={{ backgroundColor: subBgColor, color: subTextColor }}
    >
      <div className={styles["flex-space"]}>
        <p className="p-size-small bold">{sublabel}</p>
        <p className="p-size-smaller">{subtime}</p>
      </div>
    </div>
  );
};
