import styles from "../styles.module.css";


export const RedRibbonD = () => {
  return (
    <div
      className={`${styles["ribbon"]} ${styles["red"]}`}
    >
      <p className="p-font bold">D</p>
    </div>
  );
};