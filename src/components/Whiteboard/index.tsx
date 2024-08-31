import styles from "./styles.module.css";

interface WhiteboardProps {
  title: string;
  subtitle?: string;
  descriptions?: string[];
  subDescription?: string
}

export const Whiteboard = ({
  title,
  subtitle,
  descriptions = [],
  subDescription
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
      {subDescription && <p className="p-size-smaller">{subDescription}</p>}
    </div>
  );
};
