import styles from "./Neumorphism.module.css";

export const Neumorphism: React.FC<NeumorphismProps> = ({ children }) => {
  return <div className={styles["container"]}>{children}</div>;
};
