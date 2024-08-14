import styles from "../styles.module.css";


export const RedRibbonC = () => {
  return (
    <div
      className={`${styles["ribbon"]} ${styles["red"]}`}
    >
      <p className="p-font bold">C</p>
    </div>
  );
};