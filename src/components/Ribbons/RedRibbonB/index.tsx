import styles from "../styles.module.css";


export const RedRibbonB = () => {
  return (
    <div
      className={`${styles["ribbon"]} ${styles["red"]}`}
    >
      <p className="p-font bold">B</p>
    </div>
  );
};