// CSS
import { Time } from "../Time";
import styles from "./styles.module.css";

// Typescript
import { RibbonProps } from "./types";

export const Ribbon = ({
  label,
  time,
  bgColor = "defaultBgColor",
  textColor = "defaultTextColor",
  id,
}: RibbonProps) => {
  return (
    <div
      className={styles["ribbon"]}
      style={{ backgroundColor: bgColor, color: textColor }}
      id={id}
    >
      <div className="flex-8px-center-wrap">
        <p className="font-bold">{label}</p>
        {time && <Time time={time} />}
      </div>
    </div>
  );
};
