import styles from "../styles.module.css";


export const RedRibbonA = () => {
  return (
    <div
      className={`${styles["ribbon"]} ${styles["red"]}`}
    >
      <p className="p-font bold">A</p>
    </div>
  );
};