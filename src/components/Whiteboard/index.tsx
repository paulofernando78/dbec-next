import styles from "./styles.module.css";

interface WhiteboardProps {
  title: string;
  subTitle?: string;
  descriptions?: string[];
  subDescription?: string
}

export const Whiteboard = ({
  title,
  subTitle,
  descriptions = [],
  subDescription
}: WhiteboardProps) => {
  return (
    <div className={styles["container"]}>
      <h1>{title}</h1>
      {subTitle && <h3>{subTitle}</h3>}
      {descriptions.map((description, index) => (
        <p key={index}>
          <b>{description}</b>
        </p>
      ))}
      {subDescription && <p className="p-size-smaller">{subDescription}</p>}
    </div>
  );
};
