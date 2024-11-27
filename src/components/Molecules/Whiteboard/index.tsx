// CSS
import styles from "./styles.module.css";

// Typescript
import { WhiteboardProps } from "./type";

export const Whiteboard = ({
  title,
  subtitle,
  descriptions = [],
  subDescription,
}: WhiteboardProps) => {
  return (
    <div className={styles["container"]}>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
      {descriptions.map((description, index) => (
        <p key={index}>
          <b>{description}</b>
        </p>
      ))}
      {subDescription && <p className="p-size-small">{subDescription}</p>}
    </div>
  );
};
